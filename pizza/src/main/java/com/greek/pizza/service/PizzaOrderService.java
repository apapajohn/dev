package com.greek.pizza.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.greek.pizza.model.OrderResponse;
import com.greek.pizza.model.PizzaComponent;
import com.greek.pizza.model.PizzaOrder;
import com.greek.pizza.repo.PizzaComponentRepo;
import com.greek.pizza.repo.PizzaOrderPers;
import com.greek.pizza.repo.PizzaOrderRepo;

@Service
public class PizzaOrderService {
	private static final int DEFAULT_PICKUP_TIME = 15;
	 private static final Logger logger = LoggerFactory.getLogger(PizzaOrderService.class);
		
	/**
	 * Will need this in order to keep the toppings up-to-date
	 */
	@Autowired 
	PizzaComponentRepo pizzaComponentRepo;
	
	@Autowired
	PizzaOrderRepo orderRepo;
	
	//couldn't get any effect from the @Transactional annotation,
	//so trying this:
	@Autowired
	PlatformTransactionManager transactionManager;
	
	@Autowired
	private DefaultTransactionDefinition transactionDefinition;
		
	/**
	 * @param order
	 * @return
	 * @throws Exception
	 */

	public OrderResponse saveOrder(PizzaOrder order)  {
		try {
		  return transactionalOp(order);
		} catch (Exception e) {
			logger.error("error trying to save order." , e);
			return OrderResponse.getFailedOrderRepsonse("Error saving");
		}

	}
	/*
	 * This must be transactional across the updates to the toppings and to the order,
	 * in order to avoid wasting toppings in the event of a failed order
	 * It also must have  locking on the toppings, to make absolutely sure that the user's order can be filled 
	 * 
	 * Currently using pessimistic locking on the toppings. An alternative for (possible) improved performance 
	 * would be to use optimistic locking with a retry

	 */

	//@Transactional  TODO: why isn't this annotation working?
	private OrderResponse transactionalOp(PizzaOrder order) {
		TransactionStatus td = transactionManager.getTransaction(transactionDefinition);
		for (PizzaComponent topping : order.getToppings()) {
			//according to spring doc, this should have pessimistic locking,
			//because there is an @Version annotation in PizzaComponentRepo

			// TODO: throw a better exception? Runtime exception to trigger rollback
			PizzaComponent top = pizzaComponentRepo.findById(topping.getId())
					.orElseThrow(() -> new RuntimeException(
					"Missing ingredient. Inventory may have been updated while the user was ordering."));

			if (top.getQuantity() > 0) {
				top.decrementQuantity();
				pizzaComponentRepo.save(top);
			} else {
				 //runtime exception to roll back any prior updates
				return OrderResponse.getFailedOrderRepsonse("Out of " + top.getName());
			}
		}

		PizzaOrderPers orderToPersist = mapToPersistObject(order);
		try {
			orderRepo.save(orderToPersist);
		} catch (RuntimeException r) {
		
			logger.error("Server error",r);
			return OrderResponse.getFailedOrderRepsonse("Server error");
		} 
		transactionManager.commit(td);
		return OrderResponse.getSuccessfulOrderResponse(DEFAULT_PICKUP_TIME);
		
	}

	private PizzaOrderPers mapToPersistObject(PizzaOrder order) {
		PizzaOrderPers orderToPersist = new PizzaOrderPers();
		orderToPersist.setCustomerFirstName(order.getCustomerFirstName());
		orderToPersist.setToppings(order.getToppingsReport());
		orderToPersist.setTotalInCents(order.getTotalInCents());
		return orderToPersist;
	}

}

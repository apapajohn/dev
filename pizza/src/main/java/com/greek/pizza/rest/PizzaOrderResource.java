package com.greek.pizza.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.greek.pizza.model.OrderResponse;
import com.greek.pizza.model.PizzaOrder;
import com.greek.pizza.service.PizzaOrderService;


@RestController
public class PizzaOrderResource {

	@Autowired
	PizzaOrderService pizzaOrderService;
	
	/**
	 * This isn't really properly Restful. It should return various Http
	 * response statuses that reflect the outcome, but I'm running out of time.
	 * @param order
	 * @return
	 */

	@PostMapping("/order")
	public ResponseEntity<OrderResponse> saveOrder(@RequestBody() PizzaOrder order) {
		return ResponseEntity.ok(pizzaOrderService.saveOrder(order));
	}
}

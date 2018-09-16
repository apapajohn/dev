package com.greek.pizza.repo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.greek.pizza.model.PizzaComponent;
import com.greek.pizza.model.PizzaOrder;

@RepositoryRestResource(collectionResourceRel = "pizzaorder", path = "pizzaorder")
public interface PizzaOrderRepo extends CrudRepository<PizzaOrderPers, Integer>{

}

package com.greek.pizza.repo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.greek.pizza.model.PizzaComponent;

@RepositoryRestResource(collectionResourceRel = "pizzacomponent", path = "pizzacomponent")
public interface PizzaComponentRepo extends CrudRepository<PizzaComponent, Integer>{

}

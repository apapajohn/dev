package com.greek.pizza.rest;

import static com.greek.pizza.model.PizzaComponentType.TOPPING;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.greek.pizza.model.PizzaComponent;
import com.greek.pizza.repo.PizzaComponentRepo;

@RestController
public class ToppingResource {
	@Autowired
	PizzaComponentRepo toppingRepo;
	
	 @RequestMapping(value="/toppings")
	
	public ResponseEntity<List<PizzaComponent>> toppings() {
		return ResponseEntity.ok().header("Access-Control-Allow-Origin", "*")
				.body(
						StreamSupport.stream(toppingRepo.findAll().spliterator(), false)
							.filter(pc -> pc.getType().equals(TOPPING))
							.collect(Collectors.toList())
						);
				
	}
	 
}

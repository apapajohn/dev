package com.greek.pizza.repo;
import org.springframework.data.repository.CrudRepository;

import com.greek.pizza.model.Topping;
public interface ToppingRepo extends CrudRepository<Topping, Integer>{

}

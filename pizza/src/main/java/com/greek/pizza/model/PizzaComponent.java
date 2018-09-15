package com.greek.pizza.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PizzaComponent {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String name;
	private int quantity;
	private PizzaComponentType type;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
	public PizzaComponentType getType() {
		return type;
	}
	public void setType(PizzaComponentType type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "PizzaComponent [id=" + id + ", name=" + name + ", quantity=" + quantity + ", type=" + type + "]";
	}
	
	
	
}

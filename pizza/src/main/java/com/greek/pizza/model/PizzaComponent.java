package com.greek.pizza.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.annotation.Version;
/**
 * Things that make up a pizza: i.e., toppings
 * 
 * As more types are added, consider pulling this up into an interface
 */
//TODO: neeeds validation
@Entity
public class PizzaComponent {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String name;
	
	@Version
	private Integer version;
	/**
	 * How many are in stock
	 */
	private int quantity;
	/**
	 * Perhaps TOPPING or CHEESE 
	 */
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
	
	
	public Integer getVersion() {
		return version;
	}
	public void setVersion(Integer version) {
		this.version = version;
	}
	
	public void decrementQuantity() {
		--quantity;
		
	}
	@Override
	public String toString() {
		return "PizzaComponent [id=" + id + ", name=" + name + ", quantity=" + quantity
				+ ", type=" + type + "]";
	}
	
	
	
}

package com.greek.pizza.repo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PizzaOrderPers {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private String customerFirstName;

	private String  toppings;
	
	private int totalInCents;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCustomerFirstName() {
		return customerFirstName;
	}
	public void setCustomerFirstName(String customerFirstName) {
		this.customerFirstName = customerFirstName;
	}
	
	
	public String getToppings() {
		return toppings;
	}
	public void setToppings(String toppings) {
		this.toppings = toppings;
	}
	public int getTotalInCents() {
		return totalInCents;
	}
	public void setTotalInCents(int totalInCents) {
		this.totalInCents = totalInCents;
	}
	@Override
	public String toString() {
		return "PizzaOrderPers [id=" + id + ", customerFirstName=" + customerFirstName + ", toppings=" + toppings
				+ ", totalInCents=" + totalInCents + "]";
	}

	
	
	
}

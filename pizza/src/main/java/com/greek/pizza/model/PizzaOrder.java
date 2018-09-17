package com.greek.pizza.model;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
//TODO: needs validation
public class PizzaOrder {

	
	private String customerFirstName;
	
	private List<PizzaComponent> toppings;
	
	private int totalInCents;
	
	public String getCustomerFirstName() {
		return customerFirstName;
	}
	public void setCustomerFirstName(String customerFirstName) {
		this.customerFirstName = customerFirstName;
	}
	public List<PizzaComponent> getToppings() {
		return toppings;
	}
	public void setToppings(List<PizzaComponent> topping) {
		this.toppings = topping;
	}
	public int getTotalInCents() {
		return totalInCents;
	}
	public void setTotalInCents(int totalInCents) {
		this.totalInCents = totalInCents;
	}
	@Override
	public String toString() {
		return "PizzaOrder [customerFirstName=" + customerFirstName + ", toppings=" + toppings + ", totalInCents="
				+ totalInCents + "]";
	}
	public String getToppingsReport() {
		Map<String,Integer> toppingCounts = new HashMap<>();
		toppings.stream()
		.filter(pc -> pc.getType().equals(PizzaComponentType.TOPPING))
		.map(PizzaComponent::getName)
		.forEach((n) -> {
				if (toppingCounts.containsKey(n)) {
					toppingCounts.put(n,toppingCounts.get(n) + 1);
				} else {
					toppingCounts.put(n,1);
				}
			});
		
		return toppingCounts.entrySet().stream()
			.map(e -> e.getKey() + " count:  " + e.getValue())
			.collect(Collectors.joining("\n"));
	}
	
}

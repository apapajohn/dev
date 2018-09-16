package com.greek.pizza.model;

public class OrderResponse {
	private String orderStatus;
	private boolean success;
	private int pickUpInMinutes;
	

	private OrderResponse(String orderStatus, boolean success, int pickUpInMinutes) {
		this.orderStatus = orderStatus;
		this.success = success;
		this.pickUpInMinutes = pickUpInMinutes;
	}

	public static OrderResponse getSuccessfulOrderResponse(int pickUpInMinutes) {
		return new OrderResponse(null,true,pickUpInMinutes);
	}
	
	public static OrderResponse getFailedOrderRepsonse(String orderStatus) {
		return new OrderResponse(orderStatus,false,-1);
	}
	
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public int getPickUpInMinutes() {
		return pickUpInMinutes;
	}
	public void setPickUpInMinutes(int pickUpInMinutes) {
		this.pickUpInMinutes = pickUpInMinutes;
	}
	@Override
	public String toString() {
		return "OrderResponse [OrderStatus=" + orderStatus + ", success=" + success + ", pickUpInMinutes="
				+ pickUpInMinutes + "]";
	}
	
	
}

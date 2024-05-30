package com.horizon.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.horizon.model.Order;
import com.horizon.repository.OrderRepository;



@org.springframework.stereotype.Service
public class OrderService {
	
	@Autowired
	private OrderRepository orderRepo;

	// Create or update an order
	public Order saveOrder(Order order) {
        return orderRepo.save(order);
    }

	// Get order by ID
	public Optional<Order> getOrderById(int orderId)
	{
		return orderRepo.findById(orderId);
	}
	
	
	public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }
	
	// Delete an order
	
	public void deleteOrder(int orderId) {
		orderRepo.deleteById(orderId);
	}
	
	// Get all orders by status
	public List<Order> getAllOrdersByStatus(String status) {
		return orderRepo.findByStatus(status);
	}
	
}

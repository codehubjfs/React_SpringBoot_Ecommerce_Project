package com.horizon.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.horizon.model.Order;
import com.horizon.service.OrderService;



@org.springframework.web.bind.annotation.RestController
@CrossOrigin
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@GetMapping("/orders/all")
	public ResponseEntity<List<Order>> getAllOrders() {
		try {
			List<Order> orders = orderService.getAllOrders();
			if (orders.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(orders, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
		
	
	
	// Get order by ID
	@GetMapping("/orders/{orderId}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Order> getOrderById(@PathVariable int orderId) {
		try {
			Optional<Order> order = orderService.getOrderById(orderId);
			if (order.isPresent()) {
				return new ResponseEntity<>(order.get(), HttpStatus.OK);
			}
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// Get all orders by status
	
	@GetMapping("/orders/status/{status}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<List<Order>> getAllOrdersByStatus(@PathVariable String status) {
		try {
			List<Order> orders = orderService.getAllOrdersByStatus(status);
			if (orders.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(orders, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// Create  an order
	@PostMapping("/orders/all")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Order> createOrder(@RequestBody Order order) {
	    try {
	        // Set status, order date, delivery date, price, sellerId, productId, and quantity
	        order.setStatus("Pending");
	        order.setOrderDate(new java.util.Date());
	        order.setDeliveryDate(new java.util.Date());    
	        Order _order = orderService.saveOrder(order);
	        return new ResponseEntity<>(_order, HttpStatus.CREATED);
	    } catch (Exception e) {
	        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

	
	// Delete an order
	
	@DeleteMapping("/orders/{orderId}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<HttpStatus> deleteOrder(@PathVariable int orderId) {
		try {
			orderService.deleteOrder(orderId);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	}



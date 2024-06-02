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
	   @GetMapping("/all/{supplierId}")
    public ResponseEntity<List<Order>> getAllOrdersBySupplierId(@PathVariable int supplierId) {
        try {
            List<Order> orders = orderService.getAllOrdersBySupplierId(supplierId);
            if (orders.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(orders, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/totalPrice/{supplierId}")
    public ResponseEntity<Double> getTotalPriceBySupplierId(@PathVariable int supplierId) {
        try {
            Double totalPrice = orderService.getTotalPriceBySupplierId(supplierId);
            if (totalPrice == null) {
                return new ResponseEntity<>(0.0, HttpStatus.OK);
            }
            return new ResponseEntity<>(totalPrice, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/monthly-counts/{supplierId}")
    public ResponseEntity<Map<Integer, Long>> getOrderCountsByMonth(@PathVariable int supplierId) {
        Map<Integer, Long> orderCountsByMonth = orderService.getOrderCountsByMonth(supplierId);
        return new ResponseEntity<>(orderCountsByMonth, HttpStatus.OK);
    }
	@GetMapping("/orders/total")
    public ResponseEntity<Long> getTotalOrders() {
        Long totalOrders = orderService.getTotalOrders();
        return new ResponseEntity<>(totalOrders, HttpStatus.OK);
    }

    @GetMapping("/orders/revenue")
    public ResponseEntity<BigDecimal> getRevenue() {
        BigDecimal revenue = orderService.getRevenue();
        return new ResponseEntity<>(revenue, HttpStatus.OK);
    }

    @GetMapping("/orders/pending")
    public ResponseEntity<Long> getPendingOrders() {
        Long pendingOrders = orderService.getPendingOrders();
        return new ResponseEntity<>(pendingOrders, HttpStatus.OK);
    }
    
    //admin
    @GetMapping("/orders/monthly-counts")
    public ResponseEntity<Map<Integer, Long>> getOrderCountsByMonth() {
        Map<Integer, Long> orderCountsByMonth = orderService.getOrderCountsByMonth();
        return new ResponseEntity<>(orderCountsByMonth, HttpStatus.OK);
    }
	}



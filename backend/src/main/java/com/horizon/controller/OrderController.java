package com.horizon.controller;

import com.horizon.model.Order;
import com.horizon.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        if (orders.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Optional<Order> order = orderService.getOrderById(id);
        return order.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order createdOrder = orderService.saveOrder(order);
        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Long id, @RequestBody Order order) {
        Optional<Order> existingOrder = orderService.getOrderById(id);
        if (existingOrder.isPresent()) {
            Order updatedOrder = existingOrder.get();
            updatedOrder.setStatus(order.getStatus());
            orderService.saveOrder(updatedOrder);
            return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/total")
    public ResponseEntity<Long> getTotalOrders() {
        Long totalOrders = orderService.getTotalOrders();
        return new ResponseEntity<>(totalOrders, HttpStatus.OK);
    }

    @GetMapping("/revenue")
    public ResponseEntity<BigDecimal> getRevenue() {
        BigDecimal revenue = orderService.getRevenue();
        return new ResponseEntity<>(revenue, HttpStatus.OK);
    }

    @GetMapping("/pending")
    public ResponseEntity<Long> getPendingOrders() {
        Long pendingOrders = orderService.getPendingOrders();
        return new ResponseEntity<>(pendingOrders, HttpStatus.OK);
    }
}

package com.horizon.service;

import com.horizon.model.Order;
import com.horizon.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    public Optional<Order> updateOrderStatus(Long id, String status) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            order.setStatus(status);
            orderRepository.save(order);
            return Optional.of(order);
        } else {
            return Optional.empty();
        }
    }

    public Long getTotalOrders() {
        return orderRepository.count();
    }

    public BigDecimal getRevenue() {
        return orderRepository.findTotalRevenue();
    }

    public Long getPendingOrders() {
        return orderRepository.countByStatus("pending");
    }
}

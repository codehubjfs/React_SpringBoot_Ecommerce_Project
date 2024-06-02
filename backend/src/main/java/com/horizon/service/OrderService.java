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
	
	//seller
    public List<Order> getAllOrdersBySupplierId(int supplierId) {
        return orderRepo.findBySupplierId(supplierId);
    }
    // Get total price by supplier ID
    public Double getTotalPriceBySupplierId(int supplierId) {
        return orderRepo.findTotalPriceBySupplierId(supplierId);
    }
    public Map<Integer, Long> getOrderCountsByMonth(int supplierId) {
        List<Object[]> results = orderRepo.findSellerOrderCountsByMonth(supplierId);
        Map<Integer, Long> orderCountsByMonth = new HashMap<>();
        for (Object[] result : results) {
            Integer month = (Integer) result[0];
            Long count = (Long) result[1];
            orderCountsByMonth.put(month, count);
        }
        return orderCountsByMonth;
    }

    

    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepo.findById(id);
    }

    public Order saveOrder(Order order) {
        return orderRepo.save(order);
    }

    public Optional<Order> updateOrderStatus(Long id, String status) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            order.setStatus(status);
            orderRepo.save(order);
            return Optional.of(order);
        } else {
            return Optional.empty();
        }
    }

    public Long getTotalOrders() {
        return orderRepo.count();
    }

    public BigDecimal getRevenue() {
        return orderRepo.findTotalRevenue();
    }

    public Long getPendingOrders() {
        return orderRepo.countByStatus("pending");
    }
    
    //admin
    public Map<Integer, Long> getOrderCountsByMonth() {
        List<Object[]> results = orderRepository.findOrderCountsByMonth();
        Map<Integer, Long> orderCountsByMonth = new HashMap<>();
        for (Object[] result : results) {
            Integer month = (Integer) result[0];
            Long count = (Long) result[1];
            orderCountsByMonth.put(month, count);
        }
        return orderCountsByMonth;
    }


}

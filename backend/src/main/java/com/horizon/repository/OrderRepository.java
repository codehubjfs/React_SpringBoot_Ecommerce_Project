package com.horizon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.horizon.model.Order;


public interface OrderRepository  extends JpaRepository<Order, Integer>{

	List<Order> findByStatus(String status);
	

}

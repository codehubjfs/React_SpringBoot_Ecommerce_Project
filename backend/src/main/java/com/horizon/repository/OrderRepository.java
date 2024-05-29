package com.horizon.repository;

import com.horizon.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT SUM(o.amount) FROM Order o")
    BigDecimal findTotalRevenue();

    Long countByStatus(String status);
}

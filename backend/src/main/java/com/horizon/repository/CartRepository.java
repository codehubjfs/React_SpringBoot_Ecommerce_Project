package com.horizon.repository;

import com.horizon.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findByCustomerId(int customerId);
    Optional<Cart> findByCustomerIdAndProductId(int customerId, int productId);
}

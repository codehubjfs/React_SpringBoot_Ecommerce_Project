package com.horizon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.horizon.model.Electronic;
import com.horizon.model.Product;

public interface ProductRepository extends JpaRepository<Product,Integer>{
	List<Product> findByDecession(String decession);
}


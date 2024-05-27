package com.horizon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.horizon.model.Seller;

public interface SellerRepository extends JpaRepository<Seller, Integer> {
	
	 Seller findByEmailAndPassword(String email, String password);
	 List<Seller> findByStatus(String status); 
}


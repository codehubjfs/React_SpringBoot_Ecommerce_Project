package com.horizon.repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.horizon.model.Seller;

public interface SellerRepository extends JpaRepository<Seller, Integer> {
	
	 Seller findByEmailAndPassword(String email, String password);
	 List<Seller> findByStatus(String status); 
	// Find a seller by email
	    Seller findByEmail(String email);
	    
	    // Check if a seller with the given email exists
	    boolean existsByEmail(String email);
	    
	    int countByRegistrationDate(Date registrationDate);

}


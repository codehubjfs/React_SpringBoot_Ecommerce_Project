package com.horizon.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.horizon.model.Customer;
import com.horizon.model.VerifyEmailRequest;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Query("SELECT c FROM Customer c WHERE c.email = :email AND c.password = :password")
    Customer findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
    
    Optional<Customer> findByEmail(String email);


	
}
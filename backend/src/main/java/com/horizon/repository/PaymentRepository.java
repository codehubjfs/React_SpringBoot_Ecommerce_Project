package com.horizon.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.horizon.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment,Integer>{

}
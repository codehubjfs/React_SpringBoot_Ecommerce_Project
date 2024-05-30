package com.horizon.service;


import com.horizon.model.Payment;
import com.horizon.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Optional<Payment> getPaymentById(int paymentId) {
        return paymentRepository.findById(paymentId);
    }

    public void deletePaymentById(int paymentId) {
        paymentRepository.deleteById(paymentId);
    }
    public double calculateTotalRevenue() {
        List<Payment> payments = getAllPayments();
        double totalRevenue = 0.0;
        for (Payment payment : payments) {
        	 double amount = Double.parseDouble(payment.getAmount());
             totalRevenue += amount;
        }
        return totalRevenue;
    }
}
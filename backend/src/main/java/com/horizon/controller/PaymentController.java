package com.horizon.controller;


import com.horizon.model.Payment;
import com.horizon.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/payment")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public ResponseEntity<Payment> createPayment(@RequestBody Payment payment) {
        Payment savedPayment = paymentService.savePayment(payment);
        return ResponseEntity.ok(savedPayment);
    }

    @GetMapping
    public ResponseEntity<List<Payment>> getAllPayments() {
        List<Payment> payments = paymentService.getAllPayments();
        return ResponseEntity.ok(payments);
    }

    @GetMapping("/{paymentId}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable int paymentId) {
        Optional<Payment> payment = paymentService.getPaymentById(paymentId);
        if (payment.isPresent()) {
            return ResponseEntity.ok(payment.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{paymentId}")
    public ResponseEntity<Void> deletePaymentById(@PathVariable int paymentId) {
        paymentService.deletePaymentById(paymentId);
        return ResponseEntity.noContent().build();
    }
    //admin - prasanna
    @GetMapping("/total-revenue")
    public double calculateTotalRevenue() {
    	System.out.println("amount"+paymentService.calculateTotalRevenue());
        return paymentService.calculateTotalRevenue();
    }
    @GetMapping("/monthly-sales")
    public ResponseEntity<Map<String, Map<String, Double>>> getMonthlySales() {
        Map<String, Map<String, Double>> salesData = paymentService.getMonthlySales();
        return new ResponseEntity<>(salesData, HttpStatus.OK);
    }
    @GetMapping("/today-income")
    public ResponseEntity<Double> getTodayIncome() {
        Double todayIncome = paymentService.getTodayIncome();
        return ResponseEntity.ok(todayIncome);
    }
}
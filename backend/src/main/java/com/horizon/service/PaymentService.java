package com.horizon.service;


import com.horizon.model.Payment;
import com.horizon.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
    //admin - prasanna
    public double calculateTotalRevenue() {
        List<Payment> payments = getAllPayments();
        double totalRevenue = 0.0;
        for (Payment payment : payments) {
        	 double amount = Double.parseDouble(payment.getAmount());
             totalRevenue += amount;
        }
        return totalRevenue;
    }
    public Map<String, Map<String, Double>> getMonthlySales() {
        // Initialize a map to store the monthly sales data
        Map<String, Map<String, Double>> salesData = new HashMap<>();

        // Query the payment table to get the total payments for the current month (June 2024) and previous month (May 2024)
        Double currentMonthTotal = paymentRepository.findTotalPaymentsByMonth(2024, 6);
        Double previousMonthTotal = paymentRepository.findTotalPaymentsByMonth(2024, 5);

        // Create maps to store the monthly sales data for current and previous months
        Map<String, Double> currentMonthMap = new HashMap<>();
        currentMonthMap.put("2024-06-01", currentMonthTotal);

        Map<String, Double> previousMonthMap = new HashMap<>();
        previousMonthMap.put("2024-05-01", previousMonthTotal);

        // Add the monthly sales data to the main map
        salesData.put("currentMonth", currentMonthMap);
        salesData.put("previousMonth", previousMonthMap);

        return salesData;
    }

    public Double getTodayIncome() {
        LocalDate today = LocalDate.now();
        return paymentRepository.sumAmountByDate(today);
    }

}
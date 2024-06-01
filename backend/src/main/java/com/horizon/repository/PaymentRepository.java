package com.horizon.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.horizon.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment,Integer>{
@Query("SELECT p FROM Payment p WHERE p.dateOfAddition BETWEEN :startDate AND :endDate")
    List<Payment> findPaymentsBetweenDates(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
	@Query("SELECT SUM(p.amount) FROM Payment p WHERE YEAR(p.dateOfAddition) = :year AND MONTH(p.dateOfAddition) = :month")
	Double findTotalPaymentsByMonth(int year, int month);
	@Query("SELECT COALESCE(SUM(p.amount), 0) FROM Payment p WHERE p.dateOfAddition = :date")
    Double sumAmountByDate(@Param("date") LocalDate date);
}
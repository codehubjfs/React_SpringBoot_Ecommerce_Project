package com.horizon.model;

import java.time.LocalDate;
import jakarta.persistence.*;

@Entity
@Table(name = "payment")
public class Payment {
    @Id
    @SequenceGenerator(name = "payment_seq", sequenceName = "payment_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "payment_seq")
	private int paymentId;
	private int customeId;
	private int orderId;
	private String amount;
	private String modeOfPayment;
    private LocalDate dateOfAddition;  // Changed to LocalDate

	public int getPaymentId() {
		return paymentId;
	}
	public int getCustomeId() {
		return customeId;
	}
	public int getOrderId() {
		return orderId;
	}
	public String getAmount() {
		return amount;
	}
	public String getModeOfPayment() {
		return modeOfPayment;
	}
	public LocalDate getDateOfAddition() {
		return dateOfAddition;
	}
	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}
	public void setCustomeId(int customeId) {
		this.customeId = customeId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public void setModeOfPayment(String modeOfPayment) {
		this.modeOfPayment = modeOfPayment;
	}
	public void setDateOfAddition(LocalDate dateOfAddition) {
		this.dateOfAddition = dateOfAddition;
	}
}

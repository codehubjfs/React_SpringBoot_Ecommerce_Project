package com.horizon.model;

import jakarta.persistence.*;

@Entity
public class ReasonForRejection {

 @Id
 @GeneratedValue(strategy = GenerationType.SEQUENCE)
 private Long id;

 private Long sellerId;

 private Long productId;

 private String reason;

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public Long getSellerId() {
	return sellerId;
}

public void setSellerId(Long sellerId) {
	this.sellerId = sellerId;
}

public Long getProductId() {
	return productId;
}

public void setProductId(Long productId) {
	this.productId = productId;
}

public String getReason() {
	return reason;
}

public void setReason(String reason) {
	this.reason = reason;
}

 
}

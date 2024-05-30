package com.horizon.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id")
	private int orderid;
	@Column(name = "productId")
	private int productId;
	@Column(name = "quantity")
	private int quantity = 1;
	@Column(name = "price")
	private int price;
	@Column(name = "status" )
	private String status = "pending";
	@Column (name = "Delivery_date")
	private Date deliveryDate;
	@Column(name = "orderDate")
	private Date orderDate;
	@Column(name = "seller_id")
	private int sellerId;
	@Column(name = "product_name")
	private String productName;
	
	
	
	
	
	public Order() {
		super();
	}
	
	public Order(int orderid, int productId, int quantity, int price, Date deliveryDate, Date orderDate,int sellerId, String productName) {
		super();
		this.orderid = orderid;
		this.productId = productId;
		this.quantity = quantity;
		this.price = price;
		this.deliveryDate = deliveryDate;
		this.orderDate = orderDate;
		this.sellerId = sellerId;
		this.productName = productName;
		
	}
	
	public int getId() {
		return orderid;
	}
	
	public void setId(int orderid) {
		this.orderid = orderid;
	}
	
	public int getProductId() {
		return productId;
	}
	
	public void setProductId(int productId) {
		this.productId = productId;
	}
	
	public int getQuantity() {
		return quantity;
	}
	
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public double getPrice() {
		return price;
	}
	
	public void setPrice(int price) {
		this.price = price;
	}
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public Date getDeliveryDate() {
		return deliveryDate;
	}
	
	public void setDeliveryDate(Date deliveryDate) {
		this.deliveryDate = deliveryDate;
	}
	
	public Date getOrderDate() {
		return orderDate;
	}
	
	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}
	
	public int getSellerId() {
		return sellerId;
	}
	
	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}
	
	public String getProductName() {
		return productName;
	}
	
	public void setProductName(String productName) {
		this.productName = productName;
	}
	
	
	@Override
	public String toString() {
		return "Order [id=" + orderid + ", productId=" + productId + ", quantity=" + quantity + ", price=" + price
				+ ", status=" + status + ", deliveryDate=" + deliveryDate + ", orderDate=" + orderDate + ", sellerId=" + sellerId + ", productName=" + productName + "]";
	}
}

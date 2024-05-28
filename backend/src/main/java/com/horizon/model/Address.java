package com.horizon.customer.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
public class Address {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	
	@Column(name = "area", nullable = false)
	private String area;
	
	@Column(name = "city", nullable = false)
	private String city;
	
	@Column(name = "state", nullable = false)
	private String state;
	
	@Column(name = "pincode", nullable = false)
	private int pincode;
	
	@ManyToOne
	@JoinColumn(name = "customer_id", nullable = false)
	@JsonBackReference
	private Customer customer;
	
	public Address() {
		// Default constructor
	}
	
	public Address(int id, String area, String city, String state, int pincode, Customer customer) {
		this.id = id;
		this.area = area;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.customer = customer;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "Address [id=" + id + ", area=" + area + ", city=" + city + ", state=" + state + ", pincode=" + pincode
				+ ", customer=" + customer + "]";
	}
}

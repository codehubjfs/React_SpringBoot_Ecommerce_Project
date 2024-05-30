package com.horizon.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name ="customers1")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;

	@Column(name = "fname", nullable = false)
	private String fname;

	@Column(name = "email", nullable = false, unique = true)
	private String email;

	@Column(name = "phone", nullable = false)
	private Long phone;

	@Column(name = "password", nullable = false)
	private String password;
	
	@Column(name = "membership", nullable = false)
	private String Membership="Basic";
	
	@Column(name = "status", nullable = false)
	private String Status="Active";
	
	@Column(name = "date_of_Register", nullable = false)
	private String DateOfRegister;
	
	

	public Customer(int id, String fname, String email, Long phone, String password, String membership, String status,
			String dateOfRegister, Set<Address> addresses) {
		super();
		this.id = id;
		this.fname = fname;
		this.email = email;
		this.phone = phone;
		this.password = password;
		Membership = membership;
		Status = status;
		DateOfRegister = dateOfRegister;
		this.addresses = addresses;
	}
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
	 @JsonManagedReference
	private Set<Address> addresses = new HashSet<>();
	

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
	 @JsonManagedReference
    private Set<Wishlist> wishlist = new HashSet<>();
    
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
	 @JsonManagedReference
   private Set<Cart> cart = new HashSet<>();
	public Customer() {
		// Default constructor
	}
	
//	public Customer(int id, String fname, String email, Long phone, String password, Set<Address> addresses,
//			String membership) {
//		this.id = id;
//		this.fname = fname;
//		this.email = email;
//		this.phone = phone;
//		this.password = password;
//		this.addresses = addresses;
//		
//		
//	}

	public int getId() {
		return id;
	}

	public String getMembership() {
		return Membership;
	}

	public void setMembership(String membership) {
		Membership = membership;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public String getDateOfRegister() {
		return DateOfRegister;
	}

	public void setDateOfRegister(String string) {
		DateOfRegister = string;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setName(String fname) {
		this.fname = fname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(Set<Address> addresses) {
		this.addresses = addresses;
	}
	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + fname + ", email=" + email + ", phone=" + phone + ", password="
				+ password + ", addresses=" + addresses + "]";
	}
}
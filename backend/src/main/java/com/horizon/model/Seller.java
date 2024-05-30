package com.horizon.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import java.util.Date;

@Entity
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int sellerId;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "store_name")
    private String storeName;

    @Column(name = "mobile_number")
    private String mobileNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "gstin")
    private String gstin;

    @Column(name = "building")
    private String building;

    @Column(name = "street")
    private String street;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "pincode")
    private String pincode;

    @Column(name = "country")
    private String country;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "ifsc_code")
    private String ifscCode;

    @Column(name = "status")
    private String status;

    @Column(name = "registration_date")
    private Date registrationDate;

    // Constructors
    public Seller() {
        // Default constructor
    }

    public Seller(int sellerId, String fullName, String storeName, String mobileNumber, String email, String password,
                  String gstin, String building, String street, String city, String state, String pincode, String country,
                  String account_number, String ifsc_code, String status, Date registrationDate) {
        super();
        this.sellerId = sellerId;
        this.fullName = fullName;
        this.storeName = storeName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.password = password;
        this.gstin = gstin;
        this.building = building;
        this.street = street;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.country = country;
        this.accountNumber = account_number;
        this.ifscCode = ifsc_code;
        this.status = status;
        this.registrationDate = registrationDate;
    }

    @PrePersist
    protected void onCreate() {
        if (this.status == null) {
            this.status = "Active";
        }
        if (this.registrationDate == null) {
            this.registrationDate = new Date();
        }
    }

    public int getSellerId() {
        return sellerId;
    }

    public void setSellerId(int sellerId) {
        this.sellerId = sellerId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGstin() {
        return gstin;
    }

    public void setGstin(String gstin) {
        this.gstin = gstin;
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
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

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String account_number) {
        this.accountNumber = account_number;
    }

    public String getIfscCode() {
        return ifscCode;
    }

    public void setIfscCode(String ifsc_code) {
        this.ifscCode = ifsc_code;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }
}

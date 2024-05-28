package com.horizon.customer.model;

public class CustomerLoginRequest {
    private String email;
    private String password;

    // Constructors
    public CustomerLoginRequest() {
    }

    public CustomerLoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getters and setters
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
}

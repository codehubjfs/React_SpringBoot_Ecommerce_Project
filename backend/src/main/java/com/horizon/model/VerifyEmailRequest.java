package com.horizon.model;

public class VerifyEmailRequest {
    private String email;
    private String password;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public VerifyEmailRequest() {
		super();
	}

	public VerifyEmailRequest(String email) {
		super();
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
    

}
package com.horizon.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.horizon.model.Address;
import com.horizon.model.Customer;
import com.horizon.model.CustomerLoginRequest;
import com.horizon.service.CustomerService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Adjust the port as necessary
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/horizon/customers")
    public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) {
        try {
            // Ensure addresses are linked to the customer
            if (customer.getAddresses() != null) {
                for (Address address : customer.getAddresses()) {
                    address.setCustomer(customer);
                }
            }
            
            Customer _customer = customerService.addCustomer(customer); // corrected assignment
            Date date = new Date();
            customer.setDateOfRegister(date.toString());
            
            return new ResponseEntity<>(_customer, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/horizon/customers")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        try {
            List<Customer> customers = customerService.getAllCustomersByStatus("Active");
            if (customers.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(customers, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/horizon/customers/{id}")
    public ResponseEntity<Optional<Customer>> getCustomerById(@PathVariable("id") int id) {
        try {
            Optional<Customer> customer = customerService.getCustomerById(id);
            if (customer.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/horizon/customers/login")
    public ResponseEntity<Customer> login(@RequestBody CustomerLoginRequest loginRequest) {
        Customer customer = customerService.validateCustomer(loginRequest.getEmail(), loginRequest.getPassword());
        if (customer != null) {
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @PutMapping("/horizon/customers/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable("id") int id, @RequestBody Customer customer) {
        try {
            Optional<Customer> customerData = customerService.getCustomerById(id);

            if (customerData.isPresent()) {
                Customer _customer = customerData.get();
                _customer.setName(customer.getFname()); 
                _customer.setEmail(customer.getEmail());
                _customer.setPassword(customer.getPassword());
                _customer.setPhone(customer.getPhone());
                return new ResponseEntity<>(customerService.updateCustomer(_customer), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/horizon/customers/{id}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable("id") int id) {
        try {
            Optional<Customer> customerData = customerService.getCustomerById(id);

            if (customerData.isPresent()) {
                Customer customer = customerData.get();
                customer.setStatus("Inactive"); // Soft delete by setting status to "Inactive"
                customerService.updateCustomer(customer); // Update the customer
                return new ResponseEntity<>(customer, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

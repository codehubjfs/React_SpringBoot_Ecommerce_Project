package com.horizon.customer.controller;

import com.horizon.customer.model.*;
import com.horizon.customer.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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
            
            customer.setDateOfRegister(new Date().toString());
            Customer _customer = customerService.addCustomer(customer);
            return new ResponseEntity<>(_customer, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/horizon/customers")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        try {
            List<Customer> customers = customerService.getAllCustomers();
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

    @PostMapping("/horizon/customers/verify-email")
    public ResponseEntity<Map<String, String>> verifyEmail(@RequestBody VerifyEmailRequest request) {
        Optional<Customer> customer = customerService.getCustomerByEmail(request.getEmail());
        Map<String, String> response = new HashMap<>();
        if (customer.isPresent()) {
            response.put("status", "verified");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            response.put("status", "not found");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/horizon/customers/update-password")
    public ResponseEntity<Map<String, String>> updatePassword(@RequestBody UpdatePasswordRequest request) {
        boolean success = customerService.updateCustomerPassword(request.getEmail(), request.getNewPassword());
        Map<String, String> response = new HashMap<>();
        if (success) {
            response.put("status", "success");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            response.put("status", "not found");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/horizon/customers/{id}/prime")
    public ResponseEntity<Customer> updatePrimeStatus(@PathVariable("id") int id, @RequestParam String prime) {
        try {
            Optional<Customer> customerData = customerService.getCustomerById(id);
            if (customerData.isPresent()) {
                Customer customer = customerData.get();
                customer.setMembership(prime);
                Customer updatedCustomer = customerService.updateCustomer(customer);
                return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    
}
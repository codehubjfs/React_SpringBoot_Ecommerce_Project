package com.horizon.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.horizon.model.Address;
import com.horizon.model.Customer;
import com.horizon.repository.CustomerRepository;

import jakarta.transaction.Transactional;

@Service
public class CustomerService {
	@Autowired
    private final CustomerRepository customerRepository;
	
	public CustomerService(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}
    
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
    
    
    
    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
    
    public Customer updateCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
    
    
    
    public void deleteCustomer(int id) {
        customerRepository.deleteById(id);
    }
    
    public Set<Address> getAddressesByCustomerId(int customerId) {
        return customerRepository.findById(customerId)
                                 .map(Customer::getAddresses)
                                 .orElseGet(HashSet::new);
    }

    public void addAddressToCustomer(int customerId, Address address) {
        customerRepository.findById(customerId).ifPresent(customer -> {
            customer.getAddresses().add(address);
            address.setCustomer(customer);
            customerRepository.save(customer);
        });
    }

    public void removeAddressFromCustomer(int customerId, int addressId) {
        customerRepository.findById(customerId).ifPresent(customer -> {
            customer.getAddresses().removeIf(address -> address.getId() == addressId);
            customerRepository.save(customer);
        });
    }
    public Customer validateCustomer(String email, String password) {
        return customerRepository.findByEmailAndPassword(email, password);
    }

	public Optional<Customer> getCustomerById(int id) {
		return customerRepository.findById(id);
	}
	public Optional<Customer> getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email);
    }
	public boolean updateCustomerPassword(String email, String newPassword) {
        Optional<Customer> optionalCustomer = customerRepository.findByEmail(email);
        if (optionalCustomer.isPresent()) {
            Customer customer = optionalCustomer.get();
            customer.setPassword(newPassword);
            customerRepository.save(customer);
            return true;
        }
        return false;
    }
	@Transactional
    public Customer updateMembershipStatusToPrime(int id) {
        Optional<Customer> customerOpt = customerRepository.findById(id);
        if (customerOpt.isPresent()) {
            Customer customer = customerOpt.get();
            customer.setMembership("Prime");
            return customerRepository.save(customer);
        } else {
            throw new RuntimeException("Customer not found");
        }
    }




	   
}
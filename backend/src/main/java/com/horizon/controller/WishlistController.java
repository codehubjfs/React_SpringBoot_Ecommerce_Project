package com.horizon.customer.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.horizon.customer.repository.CustomerRepository;
import com.horizon.customer.repository.WishlistRepository;
import com.horizon.customer.model.Customer;
import com.horizon.customer.model.Wishlist;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/horizon/customer/wishlist")
public class WishlistController {

    @Autowired
    private WishlistRepository wishlistRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/{customerId}")
    public List<Wishlist> getWishlist(@PathVariable int customerId) {
    	List<Wishlist> temp=wishlistRepository.findByCustomerId(customerId);
    	System.out.println(temp);
        return wishlistRepository.findByCustomerId(customerId);
    }

    @PostMapping("/{customerId}")
    public ResponseEntity<Wishlist> addItemToWishlist(@PathVariable int customerId, @RequestBody Wishlist wishlist) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(() -> new RuntimeException("Customer not found"));
        wishlist.setCustomer(customer);
        Wishlist savedWishlist = wishlistRepository.save(wishlist);
        return ResponseEntity.ok(savedWishlist);
    }

    @DeleteMapping("/{customerId}/{productId}")
    public ResponseEntity<Void> removeItemFromWishlist(@PathVariable int customerId, @PathVariable int productId) {
        Wishlist wishlist = wishlistRepository.findByCustomerId(customerId)
                .stream()
                .filter(item -> item.getProductId() == productId)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Product not found in wishlist"));
        wishlistRepository.delete(wishlist);
        return ResponseEntity.noContent().build();
    }
}


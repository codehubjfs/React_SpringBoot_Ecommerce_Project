package com.horizon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.horizon.repository.CartRepository;
import com.horizon.repository.CustomerRepository;
import com.horizon.model.Cart;
import com.horizon.model.Customer;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/horizon/customer/cart")
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/{customerId}")
    public ResponseEntity<List<Cart>> getCart(@PathVariable int customerId) {
        List<Cart> cartItems = cartRepository.findByCustomerId(customerId);
        return ResponseEntity.ok(cartItems);
    }

    @PostMapping("/{customerId}")
    public ResponseEntity<Cart> addItemToCart(@PathVariable int customerId, @RequestBody Cart cart) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(() -> new RuntimeException("Customer not found"));
        cart.setCustomer(customer);
        Cart savedCart = cartRepository.save(cart);
        return ResponseEntity.ok(savedCart);
    }

    @PutMapping("/{customerId}")
    public ResponseEntity<Cart> updateCart(@PathVariable int customerId, @RequestBody Cart cart) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(() -> new RuntimeException("Customer not found"));
        cart.setCustomer(customer);
        Cart updatedCart = cartRepository.save(cart);
        return ResponseEntity.ok(updatedCart);
    }

    @DeleteMapping("/{customerId}/{productId}")
    public ResponseEntity<Void> removeItemFromCart(@PathVariable int customerId, @PathVariable int productId) {
        Cart cart = cartRepository.findByCustomerId(customerId)
                .stream()
                .filter(item -> item.getProductId() == productId)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Product not found in cart"));
        cartRepository.delete(cart);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{customerId}/{productId}/increase")
    public ResponseEntity<Cart> increaseQuantity(@PathVariable int customerId, @PathVariable int productId) {
        Cart updatedCart = cartRepository.findByCustomerIdAndProductId(customerId, productId)
                .map(existingCart -> {
                    existingCart.setQuantity(existingCart.getQuantity() + 1);  // Default increase by 1
                    return cartRepository.save(existingCart);
                })
                .orElseThrow(() -> new RuntimeException("Product not found in cart"));
        return ResponseEntity.ok(updatedCart);
    }

    @PutMapping("/{customerId}/{productId}/decrease")
    public ResponseEntity<Cart> decreaseQuantity(@PathVariable int customerId, @PathVariable int productId) {
        Cart updatedCart = cartRepository.findByCustomerIdAndProductId(customerId, productId)
                .map(existingCart -> {
                    existingCart.setQuantity(Math.max(0, existingCart.getQuantity() - 1));  // Default decrease by 1
                    return cartRepository.save(existingCart);
                })
                .orElseThrow(() -> new RuntimeException("Product not found in cart"));
        return ResponseEntity.ok(updatedCart);
    }


}

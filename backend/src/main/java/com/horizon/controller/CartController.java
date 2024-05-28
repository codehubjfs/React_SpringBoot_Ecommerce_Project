package com.horizon.customer.controller;

import com.horizon.customer.model.Cart;
import com.horizon.customer.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

@RequestMapping("/horizon/carts")
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    @GetMapping
    public List<Cart> getAllCarts() {
    	List<Cart> data=cartRepository.findAll();
    	System.out.println(data);
        return cartRepository.findAll();
    }

    @GetMapping("/{id}")
    public Cart getCartById(@PathVariable int id) {
        return cartRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Cart createCart(@RequestBody Cart cart) {
        return cartRepository.save(cart);
    }

    @PutMapping("/{id}")
    public Cart updateCart(@PathVariable int id, @RequestBody Cart cartDetails) {
        Cart cart = cartRepository.findById(id).orElse(null);
        if (cart != null) {
            cart.setProductId(cartDetails.getProductId());
            cart.setProductName(cartDetails.getProductName());
            cart.setProductDescription(cartDetails.getProductDescription());
            cart.setProductPrice(cartDetails.getProductPrice());
            cart.setProductImageUrl(cartDetails.getProductImageUrl());
            cart.setCustomer(cartDetails.getCustomer());
            cart.setQuantity(cartDetails.getQuantity());
            return cartRepository.save(cart);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public String deleteCart(@PathVariable int id) {
        cartRepository.deleteById(id);
        return "Cart with ID " + id + " has been deleted.";
    }
}

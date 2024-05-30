package com.horizon.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.horizon.model.Cart;
import com.horizon.repository.CartRepository;
import com.horizon.repository.CustomerRepository;
@Service
public class CartService {
	
	@Autowired
    private final CartRepository cartRepository;
	
	public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    public Optional<Cart> getCartById(int id) {
        return cartRepository.findById(id);
    }

    public Cart addCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public Cart updateCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public void deleteCart(int id) {
        cartRepository.deleteById(id);
    }

}

package com.horizon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.horizon.repository.SellerRepository;
import com.horizon.model.Seller;

import java.util.ArrayList;
import java.util.List;

@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<Seller> getAllSellers() {
        List<Seller> sellers = new ArrayList<>();
        sellerRepository.findAll().forEach(sellers::add);
        return sellers;
    }

    public Seller getSellerById(int id) {
        return sellerRepository.findById(id).orElse(null);
    }

    public Seller addSeller(Seller seller) {
        return sellerRepository.save(seller);
    }

    public Seller updateSeller(int id, Seller updatedSeller) {
        if (sellerRepository.existsById(id)) {
            updatedSeller.setSellerId(id);
            return sellerRepository.save(updatedSeller);
        }
        return null;
    }

    public void deleteSeller(int id) {
        sellerRepository.deleteById(id);
    }
    
    public Seller getSellerByEmailAndPassword(String email, String password) {
        return sellerRepository.findByEmailAndPassword(email, password);
    }
    public Seller getSellerByEmail(String email) {
        return sellerRepository.findByEmail(email);
    }

    public boolean checkIfEmailExists(String email) {
        return sellerRepository.existsByEmail(email);
    }
    
    public Seller updateSellerPassword(String email, String newPassword) {
        Seller seller = sellerRepository.findByEmail(email);
        if (seller != null) {
            seller.setPassword(newPassword);
            return sellerRepository.save(seller);
        } else {
            return null; // Handle the case where the seller is not found
        }
    }
    public List<Seller> getAllActiveSellers() {
        return sellerRepository.findByStatus("Active");
    }

    public Seller suspendSeller(int id) {
        Seller seller = sellerRepository.findById(id).orElse(null);
        if (seller != null) {
            seller.setStatus("Suspended");
            return sellerRepository.save(seller);
        }
        return null;
    }

    public Seller deactivateSeller(int id) {
        Seller seller = sellerRepository.findById(id).orElse(null);
        if (seller != null) {
            seller.setStatus("Deactivated");
            return sellerRepository.save(seller);
        }
        return null;
    }
    public Seller activateSeller(int id) {
        Seller seller = sellerRepository.findById(id).orElse(null);
        if (seller != null) {
            seller.setStatus("Active");
            return sellerRepository.save(seller);
        }
        return null;
    }

    public List<Seller> getAllSuspendedSellers() {
        return sellerRepository.findByStatus("Suspended");
    }
}
package com.horizon.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.horizon.service.SellerService;
import com.horizon.model.Seller;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SellerController {

    @Autowired
    private SellerService sellerService;

    @GetMapping("/sellers")
    public ResponseEntity<List<Seller>> getAllSellers() {
        try {
            List<Seller> sellers = sellerService.getAllSellers();
            if (sellers.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(sellers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/sellers/active")
    public ResponseEntity<List<Seller>> getAllActiveSellers() {
        List<Seller> sellers = sellerService.getAllActiveSellers();
        if (sellers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(sellers, HttpStatus.OK);
    }

    @PutMapping("/sellers/suspend/{id}")
    public ResponseEntity<Seller> suspendSeller(@PathVariable int id) {
        Seller seller = sellerService.suspendSeller(id);
        if (seller != null) {
            return new ResponseEntity<>(seller, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/sellers/suspended")
    public ResponseEntity<List<Seller>> getSuspendedSellers() {
        List<Seller> sellers = sellerService.getAllSuspendedSellers();
        if (sellers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(sellers, HttpStatus.OK);
    }

    @PutMapping("/sellers/deactivate/{id}")
    public ResponseEntity<Seller> deactivateSeller(@PathVariable int id) {
        Seller seller = sellerService.deactivateSeller(id);
        if (seller != null) {
            return new ResponseEntity<>(seller, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/sellers/activate/{id}")
    public ResponseEntity<Seller> activateSeller(@PathVariable int id) {
        Seller seller = sellerService.activateSeller(id);
        if (seller != null) {
            return new ResponseEntity<>(seller, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/sellers/{id}")
    public ResponseEntity<Seller> getSeller(@PathVariable int id) {
        try {
            Seller seller = sellerService.getSellerById(id);
            if (seller != null) {
                return new ResponseEntity<>(seller, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/sellers")
    public ResponseEntity<Seller> addSeller(@RequestBody Seller seller) {
        try {
            Seller _seller = sellerService.addSeller(seller);
            return new ResponseEntity<>(_seller, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/sellers/{id}")
    public ResponseEntity<Seller> updateSeller(@PathVariable int id, @RequestBody Seller updatedSeller) {
        try {
            Seller seller = sellerService.updateSeller(id, updatedSeller);
            if (seller != null) {
                return new ResponseEntity<>(seller, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/sellers/{id}")
    public ResponseEntity<?> deleteSeller(@PathVariable int id) {
        try {
            Seller seller = sellerService.getSellerById(id); 
            if (seller == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
            }
            sellerService.deleteSeller(id); // Delete the seller
            return new ResponseEntity<>(seller, HttpStatus.OK); 
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }
    
    @PostMapping("/sellers/login")
    public ResponseEntity<?> login(@RequestBody Seller loginDetails) {
        try {
            Seller seller = null;
            if (loginDetails.getEmail() != null) {
                seller = sellerService.getSellerByEmailAndPassword(loginDetails.getEmail(), loginDetails.getPassword());
            } 

            if (seller != null) {
                return ResponseEntity.ok(seller);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during login");
        }
    }
}

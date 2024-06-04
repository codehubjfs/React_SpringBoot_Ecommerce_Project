package com.horizon.controller;

import com.horizon.model.PromoCode;
import com.horizon.service.PromoCodeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/promocodes")
@CrossOrigin
public class PromoCodeController {

    @Autowired
    private PromoCodeService promoCodeService;

    @GetMapping
    public ResponseEntity<List<PromoCode>> getAllPromoCodes() {
        List<PromoCode> promoCodes = promoCodeService.getAllPromoCodes();
        return new ResponseEntity<>(promoCodes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PromoCode> getPromoCodeById(@PathVariable Long id) {
        PromoCode promoCode = promoCodeService.getPromoCodeById(id);
        if (promoCode != null) {
            return new ResponseEntity<>(promoCode, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<PromoCode> createPromoCode(@RequestBody PromoCode promoCode) {
        try {
            PromoCode createdPromoCode = promoCodeService.createPromoCode(promoCode);
            return new ResponseEntity<>(createdPromoCode, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<PromoCode> updatePromoCode(@PathVariable Long id, @RequestBody PromoCode promoCodeDetails) {
        try {
            PromoCode updatedPromoCode = promoCodeService.updatePromoCode(id, promoCodeDetails);
            if (updatedPromoCode != null) {
                return new ResponseEntity<>(updatedPromoCode, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePromoCode(@PathVariable Long id) {
        try {
            PromoCode promoCode = promoCodeService.getPromoCodeById(id);
            if (promoCode != null) {
                promoCodeService.deletePromoCode(id);
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

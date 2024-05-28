package com.horizon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.horizon.model.SellerOffer;
import com.horizon.service.SellerOfferService;

import java.util.List;

@RestController
@RequestMapping("/api/offers")
@CrossOrigin
public class SellerOfferController {

    @Autowired
    private SellerOfferService sellerOfferService;

    @GetMapping
    public ResponseEntity<List<SellerOffer>> getAllOffers() {
        List<SellerOffer> offers = sellerOfferService.getAllOffers();
        return new ResponseEntity<>(offers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SellerOffer> getOfferById(@PathVariable Long id) {
        SellerOffer offer = sellerOfferService.getOfferById(id);
        if (offer != null) {
            return new ResponseEntity<>(offer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<SellerOffer> createOffer(@RequestBody SellerOffer offer) {
        try {
            SellerOffer createdOffer = sellerOfferService.createOffer(offer);
            return new ResponseEntity<>(createdOffer, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<SellerOffer> updateOffer(@PathVariable String id, @RequestBody SellerOffer offerDetails) {
        try {
            Long offerId = Long.parseLong(id); // Parse the id as a Long
            SellerOffer updatedOffer = sellerOfferService.updateOffer(offerId, offerDetails);
            if (updatedOffer != null) {
                return new ResponseEntity<>(updatedOffer, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (NumberFormatException e) {
            // Handle the case where the id is not a valid Long
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOffer(@PathVariable Long id) {
        try {
            SellerOffer offer = sellerOfferService.getOfferById(id);
            if (offer != null) {
                sellerOfferService.deleteOffer(id);
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

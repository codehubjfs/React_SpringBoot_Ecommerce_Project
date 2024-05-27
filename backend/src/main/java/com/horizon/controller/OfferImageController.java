package com.horizon.controller;

import com.horizon.model.OfferImage;
import com.horizon.service.OfferImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/offerimages")
public class OfferImageController {

    @Autowired
    private OfferImageService offerImageService;

    @GetMapping
    public ResponseEntity<List<OfferImage>> getAllOfferImages() {
        List<OfferImage> offerImages = offerImageService.getAllActiveOfferImages();
        if (offerImages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(offerImages, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<OfferImage> createOfferImage(@RequestBody OfferImage offerImage) {
        try {
            OfferImage savedOfferImage = offerImageService.addOfferImage(offerImage);
            return new ResponseEntity<>(savedOfferImage, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<OfferImage> deleteOfferImage(@PathVariable Long id) {
        try {
            OfferImage deletedOfferImage = offerImageService.deleteOfferImage(id);
            if (deletedOfferImage != null) {
                return ResponseEntity.ok(deletedOfferImage);
            } else {
                return ResponseEntity.noContent().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}

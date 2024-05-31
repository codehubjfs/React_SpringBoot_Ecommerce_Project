package com.horizon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.horizon.model.SellerOffer;
import com.horizon.repository.SellerOfferRepository;

import java.util.List;

@Service
public class SellerOfferService {

    @Autowired
    private SellerOfferRepository sellerOfferRepository;

    public List<SellerOffer> getAllOffers() {
        return sellerOfferRepository.findAll();
    }

    public SellerOffer getOfferById(Long id) {
        return sellerOfferRepository.findById(id).orElse(null);
    }

    public SellerOffer createOffer(SellerOffer offer) {
        return sellerOfferRepository.save(offer);
    }

    public SellerOffer updateOffer(Long id, SellerOffer offerDetails) {
        return sellerOfferRepository.findById(id).map(offer -> {
            offer.setOfferName(offerDetails.getOfferName());
            offer.setDescription(offerDetails.getDescription());
            offer.setDiscount(offerDetails.getDiscount());
            offer.setStartDate(offerDetails.getStartDate());
            offer.setEndDate(offerDetails.getEndDate());
            return sellerOfferRepository.save(offer);
        }).orElse(null);
    }

    public void deleteOffer(Long id) {
        sellerOfferRepository.deleteById(id);
    }
}

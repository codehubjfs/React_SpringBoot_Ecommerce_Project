package com.horizon.service;

import com.horizon.model.Offer;
import com.horizon.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OfferService {

    @Autowired
    private OfferRepository offerRepository;

    public List<Offer> getAllActiveOffers() {
        return offerRepository.findByStatus("active");
    }

    public Offer addOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    public Offer updateOffer(Long id, Offer offerDetails) {
        Optional<Offer> offerOpt = offerRepository.findById(id);
        if (offerOpt.isPresent()) {
            Offer offer = offerOpt.get();
            offer.setOfferName(offerDetails.getOfferName());
            offer.setProductId(offerDetails.getProductId());
            offer.setDiscount(offerDetails.getDiscount());
            offer.setStartDate(offerDetails.getStartDate());
            offer.setEndDate(offerDetails.getEndDate());
            offer.setStatus(offerDetails.getStatus());
            return offerRepository.save(offer);
        }
        return null;
    }

    public Offer deleteOffer(Long id) {
        Optional<Offer> offerOpt = offerRepository.findById(id);
        if (offerOpt.isPresent()) {
            Offer offer = offerOpt.get();
            offer.setStatus("inactive");
            offerRepository.save(offer);
            return offer;
        }
        return null;
    }
}

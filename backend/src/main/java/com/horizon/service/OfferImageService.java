package com.horizon.service;

import com.horizon.model.OfferImage;
import com.horizon.repository.OfferImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OfferImageService {

    @Autowired
    private OfferImageRepository offerImageRepository;

    public List<OfferImage> getAllActiveOfferImages() {
        return offerImageRepository.findByStatus("active");
    }

    public OfferImage addOfferImage(OfferImage offerImage) {
        return offerImageRepository.save(offerImage);
    }

    public OfferImage deleteOfferImage(Long id) {
        Optional<OfferImage> offerImageOpt = offerImageRepository.findById(id);
        if (offerImageOpt.isPresent()) {
            OfferImage offerImage = offerImageOpt.get();
            offerImage.setStatus("inactive");
            offerImageRepository.save(offerImage);
            return offerImage;
        }
        return null;
    }
}

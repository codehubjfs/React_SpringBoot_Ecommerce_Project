package com.horizon.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "offer_images")
public class OfferImage {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "offer_image_seq")
    @SequenceGenerator(name = "offer_image_seq", sequenceName = "OFFER_IMAGE_SEQ", allocationSize = 1)
    private Long offerImageId;
    private String offerImageUrl;
    private String offerImageName;
    private String status = "active";

    public Long getOfferImageId() {
        return offerImageId;
    }

    public void setOfferImageId(Long offerImageId) {
        this.offerImageId = offerImageId;
    }

    public String getOfferImageUrl() {
        return offerImageUrl;
    }

    public void setOfferImageUrl(String offerImageUrl) {
        this.offerImageUrl = offerImageUrl;
    }

    public String getOfferImageName() {
        return offerImageName;
    }

    public void setOfferImageName(String offerImageName) {
        this.offerImageName = offerImageName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

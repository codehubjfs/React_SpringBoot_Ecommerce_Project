package com.horizon.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "slider_images")
public class Slider {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "slider_image_seq")
    @SequenceGenerator(name = "slider_image_seq", sequenceName = "SLIDER_IMAGE_SEQ", allocationSize = 1)
    private Long sliderImageId;
    private String sliderImageUrl;
    private String sliderImageName;
    private String status = "active";  // Add the status field with a default value

    public Long getSliderImageId() {
        return sliderImageId;
    }

    public void setSliderImageId(Long sliderImageId) {
        this.sliderImageId = sliderImageId;
    }

    public String getSliderImageUrl() {
        return sliderImageUrl;
    }

    public void setSliderImageUrl(String sliderImageUrl) {
        this.sliderImageUrl = sliderImageUrl;
    }

    public String getSliderImageName() {
        return sliderImageName;
    }

    public void setSliderImageName(String sliderImageName) {
        this.sliderImageName = sliderImageName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

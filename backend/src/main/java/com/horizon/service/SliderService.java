package com.horizon.service;

import com.horizon.model.Slider;
import com.horizon.repository.SliderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class SliderService {

    @Autowired
    private SliderRepository sliderRepository;

    public List<Slider> getAllActiveSliders() {
        return sliderRepository.findByStatus("active");
    }

    public Slider addSlider(Slider slider) {
        return sliderRepository.save(slider);
    }

    public Slider updateSlider(Long id, Slider slider) {
        Optional<Slider> existingSliderOptional = sliderRepository.findById(id);
        if (existingSliderOptional.isPresent()) {
            Slider existingSlider = existingSliderOptional.get();
            existingSlider.setSliderImageName(slider.getSliderImageName());
            existingSlider.setSliderImageUrl(slider.getSliderImageUrl());
            return sliderRepository.save(existingSlider);
        }
        return null;
    }

    public Slider deleteSlider(Long id) {
        Optional<Slider> sliderOpt = sliderRepository.findById(id);
        if (sliderOpt.isPresent()) {
            Slider slider = sliderOpt.get();
            slider.setStatus("inactive");
            sliderRepository.save(slider);
            return slider;
        }
        return null;
    }
}

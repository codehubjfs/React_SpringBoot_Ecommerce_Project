package com.horizon.controller;

import com.horizon.model.Slider;
import com.horizon.service.SliderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/sliders")
public class SliderController {

    @Autowired
    private SliderService sliderService;

    @GetMapping
    public ResponseEntity<List<Slider>> getAllSliders() {
        List<Slider> sliders = sliderService.getAllActiveSliders();
        if (sliders.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(sliders, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Slider> addSlider(@RequestBody Slider slider) {
        Slider newSlider = sliderService.addSlider(slider);
        return new ResponseEntity<>(newSlider, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Slider> updateSlider(@PathVariable Long id, @RequestBody Slider newSliderData) {
        Slider updatedSlider = sliderService.updateSlider(id, newSliderData);
        if (updatedSlider != null) {
            return new ResponseEntity<>(updatedSlider, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Slider> deleteSlider(@PathVariable Long id) {
        Slider deletedSlider = sliderService.deleteSlider(id);
        if (deletedSlider != null) {
            return new ResponseEntity<>(deletedSlider, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

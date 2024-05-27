package com.horizon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.horizon.model.Slider;
import java.util.List;

public interface SliderRepository extends JpaRepository<Slider, Long> {
    List<Slider> findByStatus(String status);
}

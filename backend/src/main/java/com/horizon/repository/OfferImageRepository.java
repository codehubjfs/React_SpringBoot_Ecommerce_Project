package com.horizon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.horizon.model.OfferImage;
import java.util.List;

public interface OfferImageRepository extends JpaRepository<OfferImage, Long> {
    List<OfferImage> findByStatus(String status);
}

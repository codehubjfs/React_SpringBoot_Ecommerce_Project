package com.horizon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.horizon.model.PromoCode;

public interface PromoCodeRepository extends JpaRepository<PromoCode, Long> {
}

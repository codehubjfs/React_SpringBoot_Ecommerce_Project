package com.horizon.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.horizon.model.ReasonForRejection;

public interface ReasonForRejectionRepository extends JpaRepository<ReasonForRejection, Long> {
	Optional<ReasonForRejection> findByProductId(Long productId);
}
package com.horizon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.horizon.model.Beauty;


public interface BeautyRepository extends JpaRepository<Beauty, Integer> {
	
}
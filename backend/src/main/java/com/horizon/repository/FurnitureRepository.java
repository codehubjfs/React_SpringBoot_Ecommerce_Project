package com.horizon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.horizon.model.Furniture;

public interface FurnitureRepository extends JpaRepository<Furniture, Integer> {
	
}

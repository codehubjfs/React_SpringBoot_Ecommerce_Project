package com.horizon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.horizon.model.Category;

public interface CategoryRepository extends JpaRepository<Category,Integer>{
	
}
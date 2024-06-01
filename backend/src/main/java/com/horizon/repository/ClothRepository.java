package com.product.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product.model.Cloth;


	
public interface ClothRepository extends JpaRepository<Cloth, Integer>{

}

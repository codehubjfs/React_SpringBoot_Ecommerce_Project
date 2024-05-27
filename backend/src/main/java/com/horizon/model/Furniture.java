package com.horizon.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "furnitures")
public class Furniture extends Product {
    private String model;
    private String material;
    private String dimension;
    private String color;
    private String subCategory;

	public String getModel() {
		return model;
	}

	public String getMaterial() {
		return material;
	}

	public String getDimension() {
		return dimension;
	}

	public String getColor() {
		return color;
	}

	public String getSubCategory() {
		return subCategory;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	public void setDimension(String dimension) {
		this.dimension = dimension;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}
	
	
}
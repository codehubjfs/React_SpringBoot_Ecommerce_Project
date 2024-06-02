package com.product.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Cloths")
public class Cloth extends Product {
    private String model;
    private String material;
    private String sizes;
    private String color;
    private String subCategory;
	public String getModel() {
		return model;
	}
	public String getMaterial() {
		return material;
	}
	public String getSizes() {
		return sizes;
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
	public void setSizes(String sizes) {
		this.sizes = sizes;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}

   
}

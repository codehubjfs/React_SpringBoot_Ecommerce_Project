package com.horizon.model;


import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "beauty")
public class Beauty extends Product {
    private String skinType;
    private String productBenefit;
    private String usedFor;
    private String itemWeight;
    private String subCategory;
    
	public String getSkinType() {
		return skinType;
	}
	public String getProductBenefit() {
		return productBenefit;
	}
	public String getUsedFor() {
		return usedFor;
	}
	public String getItemWeight() {
		return itemWeight;
	}
	public String getSubCategory() {
		return subCategory;
	}
	public void setSkinType(String skinType) {
		this.skinType = skinType;
	}
	public void setProductBenefit(String productBenefit) {
		this.productBenefit = productBenefit;
	}
	public void setUsedFor(String usedFor) {
		this.usedFor = usedFor;
	}
	public void setItemWeight(String itemWeight) {
		this.itemWeight = itemWeight;
	}
	public void setSubCategory(String subCategoryId) {
		this.subCategory = subCategoryId;
	}
	@Override
	public String toString() {
		return "Beauty [skinType=" + skinType + ", productBenefit=" + productBenefit + ", usedFor=" + usedFor
				+ ", itemweight=" + itemWeight + ", subCategory=" + subCategory + "]";
	}
	
	
}

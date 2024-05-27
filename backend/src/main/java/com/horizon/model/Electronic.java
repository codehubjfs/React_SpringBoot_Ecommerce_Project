package com.horizon.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "electronics")
public class Electronic extends Product {
    private String ram;
    private String storage;
    private String model;
    private String displaySize;
    private String displayType;
    private String color;
    private String frontCamera;
    private String rearCamera;
    private String battery;
    private String operatingSystem;
    private String processor;
    private String subCategory;

	public String getStorage() {
		return storage;
	}
	public void setStorage(String storage) {
		this.storage = storage;
	}
	public String getRam() {
		return ram;
	}
	public String getModel() {
		return model;
	}
	public String getDisplaySize() {
		return displaySize;
	}
	public String getDisplayType() {
		return displayType;
	}
	public String getColor() {
		return color;
	}
	public String getFrontCamera() {
		return frontCamera;
	}
	public String getRearCamera() {
		return rearCamera;
	}
	public String getBattery() {
		return battery;
	}

	public String getProcessor() {
		return processor;
	}
	public void setRam(String ram) {
		this.ram = ram;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public void setDisplaySize(String displaySize) {
		this.displaySize = displaySize;
	}
	public void setDisplayType(String displayType) {
		this.displayType = displayType;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public void setFrontCamera(String frontCamera) {
		this.frontCamera = frontCamera;
	}
	public void setRearCamera(String rearCamera) {
		this.rearCamera = rearCamera;
	}
	public void setBattery(String battery) {
		this.battery = battery;
	}
	public void setProcessor(String processor) {
		this.processor = processor;
	}
	public void setSubCategoryId(String subCategory) {
		this.subCategory = subCategory;
	}
	public String getOperatingSystem() {
		return operatingSystem;
	}
	public String getSubCategory() {
		return subCategory;
	}
	public void setOperatingSystem(String operatingSystem) {
		this.operatingSystem = operatingSystem;
	}
	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}


    // Getters and Setters
}


package com.horizon.model;


import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
@Table(name = "sub_category")
public class SubCategory {
    @Id
    @SequenceGenerator(name = "subcategory_seq", sequenceName = "subcategory_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "subcategory_seq")
    @Column(name = "sub_category_id")
    private int subCategoryId;

    @Column(name = "sub_category_name")
    private String subCategoryName;

    @Column(name = "category_id", insertable = false, updatable = false)
    private int categoryId;

    @Column(name = "sub_category_image")
    private String subCategoryImage;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

	public int getSubCategoryId() {
		return subCategoryId;
	}

	public String getSubCategoryName() {
		return subCategoryName;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public String getSubCategoryImage() {
		return subCategoryImage;
	}

	public Category getCategory() {
		return category;
	}

	public void setSubCategoryId(int subCategoryId) {
		this.subCategoryId = subCategoryId;
	}

	public void setSubCategoryName(String subCategoryName) {
		this.subCategoryName = subCategoryName;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public void setSubCategoryImage(String subCategoryImage) {
		this.subCategoryImage = subCategoryImage;
	}

	public void setCategory(Category category) {
		this.category = category;
	}


}
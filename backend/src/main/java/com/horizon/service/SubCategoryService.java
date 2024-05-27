package com.horizon.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.horizon.model.SubCategory;
import com.horizon.repository.SubCategoryRepository;

import java.util.List;
import java.util.Optional;

@Service
public class SubCategoryService {

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    public List<SubCategory> getAllSubCategories() {
        return subCategoryRepository.findAll();
    }

    public Optional<SubCategory> getSubCategoryById(int id) {
        return subCategoryRepository.findById(id);
    }

    public SubCategory createSubCategory(SubCategory subCategory) {
        return subCategoryRepository.save(subCategory);
    }

    public SubCategory updateSubCategory(int id, SubCategory subCategoryDetails) {
        SubCategory subCategory = subCategoryRepository.findById(id).orElseThrow(() -> new RuntimeException("SubCategory not found with id " + id));
        subCategory.setSubCategoryName(subCategoryDetails.getSubCategoryName());
        subCategory.setSubCategoryImage(subCategoryDetails.getSubCategoryImage());
        subCategory.setCategory(subCategoryDetails.getCategory());
        return subCategoryRepository.save(subCategory);
    }

    public void deleteSubCategory(int id) {
        SubCategory subCategory = subCategoryRepository.findById(id).orElseThrow(() -> new RuntimeException("SubCategory not found with id " + id));
        subCategoryRepository.delete(subCategory);
    }
}
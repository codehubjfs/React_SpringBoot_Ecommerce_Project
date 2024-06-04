package com.horizon.service;


import com.horizon.model.SubCategory;
import com.horizon.repository.SubCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubCategoryService {
    @Autowired
    private SubCategoryRepository subcategoryRepository;

    public List<SubCategory> getSubcategoriesByCategoryId(Long categoryId) {
        return subcategoryRepository.findByCategoryId(categoryId);
    }

    public SubCategory getSubcategoryById(Long id) {
        return subcategoryRepository.findById(id).orElse(null);
    }

    public SubCategory saveSubcategory(SubCategory subcategory) {
        return subcategoryRepository.save(subcategory);
    }
}

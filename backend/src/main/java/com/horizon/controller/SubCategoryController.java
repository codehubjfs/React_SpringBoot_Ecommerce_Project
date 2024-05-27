package com.horizon.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.horizon.model.SubCategory;
import com.horizon.service.CategoryService;
import com.horizon.service.SubCategoryService;

import java.util.List;

@RestController
@RequestMapping("/subcategory")
@CrossOrigin(origins = "http://localhost:3000") // Allow React app to access this API
public class SubCategoryController {

    @Autowired
    private SubCategoryService subCategoryService;
    
    @Autowired
    private CategoryService categoryService;
    

    @GetMapping
    public ResponseEntity<List<SubCategory>> getAllSubCategories() {
        List<SubCategory> subCategories = subCategoryService.getAllSubCategories();
        return new ResponseEntity<>(subCategories,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubCategory> getSubCategoryById(@PathVariable int id) {
        SubCategory subCategory = subCategoryService.getSubCategoryById(id)
                .orElseThrow(() -> new RuntimeException("SubCategory not found with id " + id));
        return ResponseEntity.ok(subCategory);
    }

    @PostMapping
    public ResponseEntity<SubCategory> createSubCategory(@RequestBody SubCategory subCategory) {
    	subCategory.setCategory(categoryService.getCategoryById(subCategory.getCategoryId()));
        SubCategory savedSubCategory = subCategoryService.createSubCategory(subCategory);
        
        return ResponseEntity.ok(savedSubCategory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SubCategory> updateSubCategory(@PathVariable int id, @RequestBody SubCategory subCategoryDetails) {
     	subCategoryDetails.setCategory(categoryService.getCategoryById(subCategoryDetails.getCategoryId()));
        SubCategory updatedSubCategory = subCategoryService.updateSubCategory(id, subCategoryDetails);
        return ResponseEntity.ok(updatedSubCategory);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubCategory(@PathVariable int id) {
        subCategoryService.deleteSubCategory(id);
        return ResponseEntity.noContent().build();
    }
}
package com.horizon.controller;

import com.horizon.model.SubCategory;
import com.horizon.service.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subcategories")
public class SubCategoryController {
    @Autowired
    private SubCategoryService subcategoryService;

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<SubCategory>> getSubcategoriesByCategoryId(@PathVariable Long categoryId) {
        return ResponseEntity.ok(subcategoryService.getSubcategoriesByCategoryId(categoryId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubCategory> getSubcategoryById(@PathVariable Long id) {
        SubCategory subcategory = subcategoryService.getSubcategoryById(id);
        return subcategory != null ? ResponseEntity.ok(subcategory) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<SubCategory> createSubcategory(@RequestBody SubCategory subcategory) {
        return ResponseEntity.ok(subcategoryService.saveSubcategory(subcategory));
    }
}

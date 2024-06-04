package com.horizon.controller;


import com.horizon.model.Question;
import com.horizon.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/subcategory/{subcategoryId}")
    public ResponseEntity<?> getQuestionsBySubcategory(@PathVariable Long subcategoryId) {
        try {
            List<Question> questions = questionService.getQuestionsBySubcategoryId(subcategoryId);
            return ResponseEntity.ok(questions);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to fetch questions: " + e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> addQuestion(@RequestBody Question question) {
        try {
            Question savedQuestion = questionService.saveQuestion(question);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedQuestion);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add question: " + e.getMessage());
        }
    }
}

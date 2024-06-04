package com.horizon.controller;



import com.horizon.model.Answer;
import com.horizon.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answers")
public class AnswerController {
    @Autowired
    private AnswerService answerService;

    @PostMapping
    public ResponseEntity<List<Answer>> submitAnswers(@RequestBody List<Answer> answers) {
        List<Answer> savedAnswers = answerService.saveAnswers(answers);
        return ResponseEntity.ok(savedAnswers);
    }
}

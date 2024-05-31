package com.horizon.service;


import com.horizon.model.Question;
import com.horizon.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> getQuestionsBySubcategoryId(Long subcategoryId) {
        List<Question> questions = questionRepository.findBySubcategoryId(subcategoryId);
        List<Question> defaultQuestions = questionRepository.findByIsDefault(true);
        questions.addAll(defaultQuestions);
        return questions;
    }

    public Question getQuestionById(Long id) {
        return questionRepository.findById(id).orElse(null);
    }

    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }
}

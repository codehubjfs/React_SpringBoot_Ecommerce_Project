package com.horizon.service;


import com.horizon.model.Answer;
import com.horizon.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {
    @Autowired
    private AnswerRepository answerRepository;

    public List<Answer> saveAnswers(List<Answer> answers) {
        return answerRepository.saveAll(answers);
    }
}

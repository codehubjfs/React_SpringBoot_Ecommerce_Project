package com.horizon.repository;


import com.horizon.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findBySubcategoryId(Long subcategoryId);
    List<Question> findByIsDefault(boolean isDefault);
}

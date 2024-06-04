package com.horizon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.horizon.model.ReasonForRejection;
import com.horizon.repository.ReasonForRejectionRepository;

@Service
public class ReasonForRejectionService {

    @Autowired
    private ReasonForRejectionRepository reasonForRejectionRepository;

    public ReasonForRejection saveReasonForRejection(ReasonForRejection reasonForRejection) {
        return reasonForRejectionRepository.save(reasonForRejection);
    }

}
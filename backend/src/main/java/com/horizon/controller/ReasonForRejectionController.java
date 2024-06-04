package com.horizon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.horizon.model.ReasonForRejection;
import com.horizon.service.ReasonForRejectionService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ReasonForRejectionController {

    @Autowired
    private ReasonForRejectionService reasonForRejectionService;

    @PostMapping("/reasons-for-rejection")
    public ResponseEntity<ReasonForRejection> saveReasonForRejection(@RequestBody ReasonForRejection reasonForRejection) {
        ReasonForRejection savedReason = reasonForRejectionService.saveReasonForRejection(reasonForRejection);
        return new ResponseEntity<>(savedReason, HttpStatus.CREATED);
    }

}
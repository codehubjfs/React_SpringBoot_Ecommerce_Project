package com.horizon.service;

import com.horizon.exception.PromoCodeNotFoundException;
import com.horizon.model.PromoCode;
import com.horizon.repository.PromoCodeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromoCodeService {

    @Autowired
    private PromoCodeRepository promoCodeRepository;

    public List<PromoCode> getAllPromoCodes() {
        return promoCodeRepository.findAll();
    }

    public PromoCode getPromoCodeById(Long id) {
        return promoCodeRepository.findById(id)
                .orElseThrow(() -> new PromoCodeNotFoundException("Promo Code not found with id: " + id));
    }

    public PromoCode createPromoCode(PromoCode promoCode) {
        return promoCodeRepository.save(promoCode);
    }

    public PromoCode updatePromoCode(Long id, PromoCode promoCodeDetails) {
        PromoCode promoCode = promoCodeRepository.findById(id)
                .orElseThrow(() -> new PromoCodeNotFoundException("Promo Code not found with id: " + id));

        promoCode.setCode(promoCodeDetails.getCode());
        promoCode.setStartDate(promoCodeDetails.getStartDate());
        promoCode.setEndDate(promoCodeDetails.getEndDate());
        promoCode.setAmount(promoCodeDetails.getAmount());

        return promoCodeRepository.save(promoCode);
    }

    public void deletePromoCode(Long id) {
        PromoCode promoCode = promoCodeRepository.findById(id)
                .orElseThrow(() -> new PromoCodeNotFoundException("Promo Code not found with id: " + id));
        promoCodeRepository.delete(promoCode);
    }
}

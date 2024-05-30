package com.horizon.service;

import com.horizon.model.Admin;
import com.horizon.model.Seller;
import com.horizon.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Admin getAdminById(int id) {
        return adminRepository.findById(id).orElse(null);
    }

    public Admin createAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public Admin updateAdmin(int id, Admin adminDetails) {
        Admin admin = adminRepository.findById(id).orElse(null);
        if (admin != null) {
            admin.setName(adminDetails.getName());
            admin.setEmployeeId(adminDetails.getEmployeeId());
            admin.setEmail(adminDetails.getEmail());
            admin.setPersonalEmail(adminDetails.getPersonalEmail());
            admin.setPhone(adminDetails.getPhone());
            admin.setMobile(adminDetails.getMobile());
            admin.setAddress(adminDetails.getAddress());
            admin.setProfilePictureUrl(adminDetails.getProfilePictureUrl());
            admin.setPassword(adminDetails.getPassword());
            return adminRepository.save(admin);
        }
        return null;
    }

    public void deleteAdmin(int id) {
        adminRepository.deleteById(id);
    }
    
    public Admin getAdminByEmailAndPassword(String email, String password) {
        return adminRepository.findByEmailAndPassword(email, password);
    }
    public Admin updateAdminPassword(String email, String newPassword) {
        Admin admin = adminRepository.findByEmail(email);
        if (admin != null) {
        	admin.setPassword(newPassword);
            return adminRepository.save(admin);
        } else {
            return null; // Handle the case where the seller is not found
        }
    }
    public Admin getAdminByEmail(String email) {
        return adminRepository.findByEmail(email);
    }
}

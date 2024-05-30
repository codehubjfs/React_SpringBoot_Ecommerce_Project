package com.horizon.controller;

import com.horizon.model.Admin;
import com.horizon.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admins")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable int id) {
        Admin admin = adminService.getAdminById(id);
        if (admin != null) {
            return ResponseEntity.ok(admin);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.createAdmin(admin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable int id, @RequestBody Admin adminDetails) {
        Admin updatedAdmin = adminService.updateAdmin(id, adminDetails);
        if (updatedAdmin != null) {
            return ResponseEntity.ok(updatedAdmin);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable int id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.noContent().build();
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Admin loginDetails) {
        try {
            Admin admin = adminService.getAdminByEmailAndPassword(loginDetails.getEmail(), loginDetails.getPassword());
            if (admin != null) {
                return ResponseEntity.ok(admin);
            } else {
                return ResponseEntity.status(401).body("Incorrect email or password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred during login");
        }
    }
    @PutMapping("/reset-admin-password")
    public ResponseEntity<?> updatePassword(@RequestBody Map<String, String> request) {
        try {
            String email = request.get("email");
            String newPassword = request.get("newPassword");

            Admin admin = adminService.updateAdminPassword(email, newPassword);

            return admin != null ?
                    ResponseEntity.ok(admin) :
                    ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not found");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during password reset");
        }
    }
    @PostMapping("/verify-email")
    public ResponseEntity<?> verifyEmail(@RequestBody Map<String, String> request) {
        try {
            String email = request.get("email");
            System.out.println("Received email: " + email); // Debugging statement
            Admin admin = adminService.getAdminByEmail(email);

            return admin != null ?
                ResponseEntity.ok(admin) :
                ResponseEntity.notFound().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during email verification");
        }
    }

}

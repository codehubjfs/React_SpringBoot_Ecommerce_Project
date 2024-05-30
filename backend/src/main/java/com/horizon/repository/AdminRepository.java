package com.horizon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.horizon.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
    Admin findByEmail(String email);
	
    Admin findByEmailAndPassword(String email, String password);
}

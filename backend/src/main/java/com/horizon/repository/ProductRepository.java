package com.horizon.repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.horizon.model.Electronic;
import com.horizon.model.Product;
import com.horizon.model.ProductSalesDTO;

public interface ProductRepository extends JpaRepository<Product,Integer>{
	//admin
	List<Product> findByDecession(String decession);
	 int countByDateOfAddition(Date dateOfAddition);
	 @Query("SELECT new com.horizon.model.ProductSalesDTO(p.category, COUNT(p)) FROM Product p GROUP BY p.category")
	    List<ProductSalesDTO> countProductsByCategory();



	 //Supplier
	 List<Product> findBySupplierIdAndStatus(int supplierId, String status);
	 List<Product> findProductsBySupplierIdAndStatus(int supplierId, String status);

	 @Query("SELECT p.supplierId, COUNT(p) FROM Product p GROUP BY p.supplierId ORDER BY COUNT(p) DESC")
	    List<Object[]> countProductsBySupplier();

}


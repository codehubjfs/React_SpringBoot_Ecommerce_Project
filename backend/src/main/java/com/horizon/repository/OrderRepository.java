package com.horizon.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.horizon.model.Order;


public interface OrderRepository  extends JpaRepository<Order, Integer>{

	List<Order> findByStatus(String status);
	
   List<Order> findBySupplierId(int supplierId);
	   
	   @Query("SELECT SUM(o.price * o.quantity) FROM Order o WHERE o.supplierId = :supplierId")
	    Double findTotalPriceBySupplierId(@Param("supplierId") int supplierId);
	   
	   
	   @Query("SELECT MONTH(o.orderDate) as month, COUNT(o.id) as count " +
		       "FROM Order o " +
		       "WHERE o.supplierId = :supplierId " +
		       "GROUP BY MONTH(o.orderDate)")
		List<Object[]> findSellerOrderCountsByMonth(@Param("supplierId") int supplierId);

//admin-prasanna
		@Query("SELECT SUM(o.amount) FROM Order o")
    BigDecimal findTotalRevenue();

    Long countByStatus(String status);
    
    //admin
    @Query("SELECT MONTH(o.orderDate) as month, COUNT(o.id) as count FROM Order o GROUP BY MONTH(o.orderDate)")
    List<Object[]> findOrderCountsByMonth();
}

package com.devdssales.dssales.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devdssales.dssales.dto.SaleSucessDTO;
import com.devdssales.dssales.dto.SaleSumDTO;
import com.devdssales.dssales.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	@Query("SELECT new com.devdssales.dssales.dto.SaleSumDTO(obj.seller, SUM(obj.amount))"
			+ "FROM Sale AS obj GROUP BY obj.seller" )
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.devdssales.dssales.dto.SaleSucessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals))"
			+ "FROM Sale AS obj GROUP BY obj.seller" )
	List<SaleSucessDTO> successGroupedBySeller();
}

package com.devdssales.dssales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devdssales.dssales.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}

package com.devdssales.dssales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devdssales.dssales.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}

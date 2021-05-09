package com.devdssales.dssales.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devdssales.dssales.dto.SaleDTO;
import com.devdssales.dssales.dto.SaleSucessDTO;
import com.devdssales.dssales.dto.SaleSumDTO;
import com.devdssales.dssales.entities.Sale;
import com.devdssales.dssales.repositories.SaleRepository;
import com.devdssales.dssales.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pagealbe){
		sellerRepository.findAll();
		Page<Sale> result = repository.findAll(pagealbe);
		return result.map(x -> new SaleDTO(x));
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller(){
		return repository.amountGroupedBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSucessDTO> successGroupedBySeller(){
		return repository.successGroupedBySeller();
	}
}

package com.devdssales.dssales.dto;

import com.devdssales.dssales.entities.Seller;

public class SaleSumDTO {
	private String sellerName;
	private Double sum;
	
	public SaleSumDTO(){}
	
	public SaleSumDTO(Seller seller, Double sum) {
		this.sellerName = seller.getName();
		this.sum = sum;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}
	
	
	
	
}

import React, { useState, useEffect } from 'react';

import api from 'server/api';

interface SellerData {
    id: number;
    name: string;
}

interface SalesData {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: Date;
    seller: {
        id: number;
        name: string;
    }
}

interface Data {
    content: SalesData[];
    pageable: {
        sort: {
            sorted: boolean;
            unsorted: boolean;
            empty: boolean;
        };
        pageNumber: number;
        pageSize: number;
        offset: number;
        paged: boolean;
        unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
    };
    first: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    empty: boolean;
}

const Test: React.FC = () => {
    const [sellers, SetSellers] = useState<SellerData[]>([]);
    const [sales, SetSales] = useState<SalesData[]>([]);
    const [dataContent, SetDataContent] = useState<Data | null>();

    useEffect(() => {
        async function getSellers() {
            const response = await api.get<SellerData[]>('/sellers');

            SetSellers(response.data);
        }
        getSellers();
    }, []);

    useEffect(() => {
        async function getSales() {
            const response = await api.get<SalesData[]>('/sales');


            SetDataContent(Object(response.data));

            if(dataContent){
                SetSales(dataContent.content);
            }

        }
        getSales();
    }, []);

    return (
        <>
            {
                sellers.map(seller => (
                    <ul key={seller.id}>
                        <span>{seller.name}</span>
                    </ul>
                ))
            }
            <div>
                {
                    sales.map(sale => (
                        <ul key={sale.id}>
                            <li>{sale.date}</li>
                        </ul>
                    ))
                }
            </div>
        </>
    )
}

export default Test;
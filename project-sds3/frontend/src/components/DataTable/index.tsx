import React, { useState, useEffect } from 'react';

import api from 'server/api';

import { SellerData } from 'types/seller';

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

const DataTable: React.FC = () => {

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

            if (dataContent) {
                SetSales(dataContent.content);
            }

        }
        getSales();
    }, []);

    console.log(sellers);

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sales.map(sale => (
                            <tr key={sale.id}>
                                <td>{String(sale.date).replace('-',"/").replace('-',"/")}</td>
                                <td>{sale.seller.name}</td>
                                <td>{sale.visited}</td>
                                <td>{sale.deals}</td>
                                <td>{sale.amount}.00</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;
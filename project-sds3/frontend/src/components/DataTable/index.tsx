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


const DataTable: React.FC = () => {

    const [sellers, SetSellers] = useState<SellerData[]>([]);
    const [sales, SetSales] = useState<SalesData[]>([]);

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


            if(response){

                localStorage.setItem('data', JSON.stringify(response.data));

                const dataExist = localStorage.getItem('data')
                
                const data = dataExist ? JSON.parse(dataExist) : null;

                SetSales(data.content);

            }

        }
        getSales();
    }, []);

    console.log(sellers);
    console.log(sales);

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
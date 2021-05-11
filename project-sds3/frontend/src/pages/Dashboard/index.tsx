import React, { useState, useEffect } from 'react';

import BarChart from 'components/BarChart';
import DataTable from 'components/DataTable';
import DonutChart from 'components/DonutChart';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

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

const Dashboard: React.FC = () => {

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
            <NavBar />
            <div className="container">
                <h1 style={{ color: '#FF8400' }}>Dashboard</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>

                        <BarChart />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as vendas</h5>

                        <DonutChart />
                    </div>
                </div>
                <DataTable />


            </div>
            <Footer />
        </>
    )
}

export default Dashboard;
import React from 'react';
import Chart from 'react-apexcharts';

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

const DonutChart: React.FC = () =>{
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    return(
        <>
            <Chart 
                options={{ ...options, labels: mockData.labels }}
                series={mockData.series}
                type="donut"
                height="240"

            />
        </>
    )
}
export default DonutChart;

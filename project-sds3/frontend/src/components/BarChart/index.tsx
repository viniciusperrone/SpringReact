import React from 'react';
import Chart from 'react-apexcharts';

// import api from 'server/api';

// interface SellerData {
//     id: number;
//     name: string;
// }

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

// interface Data {
//     content: SalesData[];
//     pageable: {
//         sort: {
//             sorted: boolean;
//             unsorted: boolean;
//             empty: boolean;
//         };
//         pageNumber: number;
//         pageSize: number;
//         offset: number;
//         paged: boolean;
//         unpaged: boolean;
//     };
//     last: boolean;
//     totalPages: number;
//     totalElements: number;
//     sort: {
//         sorted: boolean;
//         unsorted: boolean;
//         empty: boolean;
//     };
//     first: boolean;
//     size: number;
//     number: number;
//     numberOfElements: number;
//     empty: boolean;
// }

const BarChart: React.FC = () => {
    
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return(
        <>
            <Chart 
                options={{ ...options, xaxis: mockData.labels }}
                series={mockData.series}
                type="bar"
                height="240"

            />
        </>
    )
}

export default BarChart;
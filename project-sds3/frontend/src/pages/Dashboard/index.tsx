import React from 'react';

import BarChart from 'components/BarChart';
import DataTable from 'components/DataTable';
import DonutChart from 'components/DonutChart';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

const Dashboard: React.FC = () => {

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
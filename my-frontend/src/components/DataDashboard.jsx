
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilterComponent from './FilterComponent';
import ChartComponent from './ChartComponent';

const DataDashboard = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4200/api/v1/data/datas');
                setData(response.data);
                setFilteredData(response.data); // Initialize filtered data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Data Visualization Dashboard</h1>
            <FilterComponent data={data} setFilteredData={setFilteredData} />
            <ChartComponent data={filteredData} />
        </div>
    );
};

export default DataDashboard;

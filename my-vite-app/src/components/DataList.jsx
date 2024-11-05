// src/components/DataList.jsx
import React, { useEffect, useState } from 'react';

const DataList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4200/api/v1/data/datas');
            const result = await response.json();
            setData(result.data); // Adjust according to your backend response
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Data List</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li> // Adjust based on your data structure
                ))}
            </ul>
        </div>
    );
};

export default DataList;

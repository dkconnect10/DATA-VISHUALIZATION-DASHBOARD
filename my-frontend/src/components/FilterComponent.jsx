import React, { useState } from 'react';

const FilterComponent = ({ data, setFilteredData }) => {
    const [filters, setFilters] = useState({
        endYear: '',
        topic: '',
        sector: '',
        region: '',
       
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const applyFilters = () => {
        const filtered = data.filter(item => {
            return (
                (filters.endYear ? item.year === filters.endYear : true) &&
                (filters.topic ? item.topics.includes(filters.topic) : true) &&
                (filters.sector ? item.sector === filters.sector : true) &&
                (filters.region ? item.region === filters.region : true)
                // Add other filter conditions
            );
        });
        setFilteredData(filtered);
    };

    return (
        <div>
            <h2>Filters</h2>
            {/* Example Filter Inputs */}
            <input name="endYear" placeholder="End Year" onChange={handleChange} />
            <input name="topic" placeholder="Topic" onChange={handleChange} />
            <button onClick={applyFilters}>Apply Filters</button>
        </div>
    );
};

export default FilterComponent;

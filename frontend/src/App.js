import React, { useEffect, useState } from 'react';
import DataDisplay from './components/DataDisplay'; // Import the new component
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4200/api/v1/datas'); // Backend API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to My React App</h1>
      {error && <p>{error}</p>}
      {data ? <DataDisplay data={data} /> : <p>Loading data...</p>}
    </div>
  );
}

export default App;

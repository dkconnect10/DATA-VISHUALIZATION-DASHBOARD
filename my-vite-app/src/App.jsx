import React from 'react';
import DataList from './components/DataList';
import DataForm from './components/DataForm';

const App = () => {
    return (
        <div>
            <h1>My Vite React App</h1>
            <DataForm />  {/* Show the form for submitting data */}
            <DataList />   {/* Show the list of data */}
        </div>
    );
};

export default App;

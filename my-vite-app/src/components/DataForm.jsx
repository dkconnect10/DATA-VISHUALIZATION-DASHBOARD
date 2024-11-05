// src/components/DataForm.jsx
import React, { useState } from 'react';

const DataForm = () => {
    const [title, setTitle] = useState('');
    const [intensity, setIntensity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Use the VITE_API_URL from the .env file
        const response = await fetch(`${import.meta.env.VITE_API_URL}/datas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, intensity }), // Adjust based on your backend requirements
        });

        if (response.ok) {
            // Handle successful submission (maybe reset the form or show a success message)
            console.log("Data submitted successfully!");
            // Optionally reset the form fields
            setTitle('');
            setIntensity('');
        } else {
            console.error("Failed to submit data:", response.statusText);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <input
                type="text"
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
                placeholder="Intensity"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default DataForm;

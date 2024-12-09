import React, { useState } from 'react';
import axios from 'axios';

const PatientForm = () => {
    const [patient, setPatient] = useState({
        name: '',
        age: '',
        email: '',
        condition: '',
    });

    const handleChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/patients', patient);
            alert('Patient added successfully!');
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="age" placeholder="Age" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="condition" placeholder="Condition" onChange={handleChange} />
            <button type="submit">Add Patient</button>
        </form>
    );
};

export default PatientForm;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/patients');
                setPatients(res.data);
            } catch (err) {
                console.error(err.message);
            }
        };

        fetchPatients();
    }, []);

    return (
        <ul>
            {patients.map((patient) => (
                <li key={patient._id}>{patient.name} - {patient.email}</li>
            ))}
        </ul>
    );
};

export default PatientList;


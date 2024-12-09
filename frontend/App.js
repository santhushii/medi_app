import React from 'react';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';

const App = () => {
    return (
        <div>
            <h1>Patient Management System</h1>
            <PatientForm />
            <PatientList />
        </div>
    );
};

export default App;


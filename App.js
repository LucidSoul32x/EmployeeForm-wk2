import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = localStorage.getItem('employees');
        if (storedEmployees) {
            setEmployees(JSON.parse(storedEmployees));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    const addEmployee = (employee) => {
        setEmployees([...employees, employee]);
    };

    return (
        <div className="App">
            <h1>Employee Management System</h1>
            <EmployeeForm onAddEmployee={addEmployee} />
            <h3>Saved Employees:</h3>
            <ul>
                {employees.map((emp, index) => (
                    <li key={index}>
                        {emp.name} – {emp.email} – {emp.title} – {emp.department}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

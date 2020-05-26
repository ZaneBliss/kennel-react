import React, { useState, useEffect }  from 'react';
import EmployeeCard from '../../components/employee/EmployeeCard'
import EmployeeManager from '../EmployeeManager'

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return EmployeeManager.getAll().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        })
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard />)}
        </div>
    )
}

export default EmployeeList
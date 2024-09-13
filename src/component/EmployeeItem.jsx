import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getListOfEmployee } from '../services/localstorage';
import { deleteEmployee } from '../services/localstorage';

const EmployeeItem = ({ employee, setEmployee }) => {
    const { id, name, email, address, phone } = employee;
    const navigate = useNavigate()
    const removeEmployee = () => {
        deleteEmployee(id);
        setEmployee(getListOfEmployee())
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>
                <div className="d-flex gap-3">
                    <span role='button' className='badge bg-success' onClick={() => navigate(`/edit-employee/${id}`)}>
                        Sửa
                    </span>
                    <span role='button' className='badge bg-danger' onClick={() => removeEmployee()}>
                        Xóa
                    </span>
                </div>
            </td>
        </tr>
    )
}

export default EmployeeItem

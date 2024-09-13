import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react";
import { addEmployee } from "../services/localstorage";
import { editEmployee, getEmployeeById } from "../services/localstorage";



export const EmployeeForm = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [showAlert, setShowAlert] = useState(false)
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    });

    const resetForm = () => {
        setInputValues({
            name: '',
            email: '',
            address: '',
            phone: ''
        });
    };

    const setForm = (newValues) => {
        setInputValues(newValues)
    }

    const handleInputChange = (event) => {
        const target = event.target;
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee(inputValues);
        setShowAlert(true)
        resetForm()
        setTimeout(() => {
            setShowAlert(false)
        }, 20000)
    }
    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            setForm(employee)
        }
    }, [id])
    return (
        <div>
            <div className="d-flex my-5 justify-content-between">
                <button className="btn btn-outline-primary" onClick={() => navigate("/")}>Trở Lại</button>
                <h1>{id ? "Edit" : "Create"} Employee</h1>
                <div />
            </div>
            <div className="card border-pramary m-5 p-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-lable mt-2" htmlFor="name">Họ Và Tên</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={inputValues.name}
                            onChange={(e) => handleInputChange(e)} // nếu gặp phải biến undefile thì chuyển thành khai báo Arrow function
                            className="form-control"
                            placeholder="Nhập Họ Và Tên..."
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-lable mt-2" htmlFor="name">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={inputValues.email}
                            onChange={(e) => handleInputChange(e)}
                            className="form-control"
                            placeholder="Nhập Email..."
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-lable mt-2" htmlFor="name">Địa Chỉ</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            value={inputValues.address}
                            onChange={(e) => handleInputChange(e)}
                            className="form-control"
                            placeholder="Nhập Địa Chỉ..."
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-lable mt-2" htmlFor="name">Số Điện Thoại</label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            value={inputValues.phone}
                            onChange={(e) => handleInputChange(e)}
                            className="form-control"
                            placeholder="Nhập Số Điện Thoại..."
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type='submit' className="btn btn-outline-primary">
                            {id ? "Sửa" : "Thêm"}
                        </button>
                    </div>
                </form>
            </div>
            {
                showAlert && (
                    <div className="px-5">
                        <div className="alert text-white alert-success" role="alert">
                            Thêm Nhân Viên Thành Công
                        </div>
                    </div>
                )

            }
        </div>
    )
}


import React, { useEffect, useState } from "react"
import EmployeeItem from "./EmployeeItem"
import { getListOfEmployee } from "../services/localstorage"

export const EmployeeList = () => {
    const [employees, setEmployee] = useState([])

    useEffect(() => {
        setEmployee(getListOfEmployee())
    }, [])
    return (
        <div>
            <h1 className="my-5 text-center">Danh Sách Nhân Viên</h1>
            {
                employees.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Họ Tên</th>
                                    <th>Email</th>
                                    <th>Địa Chỉ</th>
                                    <th>Số ĐT</th>
                                    <th>Ations</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map(employee =>
                                    <EmployeeItem
                                        key={employee.id}
                                        employee={employee}
                                        setEmployee={setEmployee}
                                    />
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No Employee</h3>
                )
            }

        </div>
    )
}

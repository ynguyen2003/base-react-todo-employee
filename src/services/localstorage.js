import uuid from "react-uuid";

export const getListOfEmployee = () => {
    if (!localStorage["@employees"]) {
        localStorage["@employees"] = JSON.stringify([]);
    }

    let employees = JSON.parse(localStorage["@employees"])
    return employees
}

export const getEmployeeById = (id) => {
    const employees = getListOfEmployee();
    const employee = employees.find((employee) => employee.id === id)
    return employee
}

export const addEmployee = (employee) => {
    const employees = getListOfEmployee();
    employees.push({ id: uuid(), ...employee })
    localStorage["@employees"] = JSON.stringify(employees)
}

export const editEmployee = (id, newEmployee) => {
    let employees = getListOfEmployee();
    employees = employees.filter(employee => employee.id !== id);
    employees.push(newEmployee);
    localStorage["@employees"] = JSON.stringify(employees);
}

export const deleteEmployee = (id) => {
    let employees = getListOfEmployee();
    employees = employees.filter((employee) => employee.id !== id)
    localStorage["@employees"] = JSON.stringify(employees);
}
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './component/Navbar'
import { EmployeeList } from './component/EmplyeeList'
import { EmployeeForm } from './component/EmployeeForm'


export const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<EmployeeList />}></Route>
          <Route path='/create-employee' element={<EmployeeForm />}></Route>
          <Route path='/edit-employee/:id' element={<EmployeeForm />}></Route>
        </Routes>
      </div>
    </div>
  )
}

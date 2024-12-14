import React, { useEffect } from 'react'
import Login from './pages/Login'
import Admindashboard from './pages/Admindashboard'
import { Routes, Route } from 'react-router-dom'
import Employeedashboard from './pages/Employeedashboard'
import { initializeTemporaryData } from './utils/LocalStorage'
import AddEmployee from './components/Buttons/AddEmployee'
import Createtask from './components/Buttons/CreateTask'
import SubmitTask from './components/Buttons/SubmitTask'
import EmployeeCard from './components/EmployeeCard'


const App = () => {

  useEffect(() => {
    initializeTemporaryData();
  },[]);


  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/employee-dashboard' element={<Employeedashboard/>}/>
        <Route path='/admin-dashboard' element={<Admindashboard/>}/>
        <Route path='/admin-dashboard/*' element={<Admindashboard/>}/>
        <Route path='/add-employee' element={<AddEmployee/>}/>
        <Route path='/create-task' element={<Createtask/>} />
        <Route path='/submit-task' element={<SubmitTask/>}/>
        <Route path='/employee-management' element={<EmployeeCard/>}/>
       </Routes>
  )
}

export default App
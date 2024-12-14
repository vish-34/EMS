import React from 'react'
import Sidebar from '../components/Sidebar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Admin/Dashboard'
import Employee from '../components/Admin/Employee'
import TaskManagement from '../components/Admin/TaskManagement'
import Reviews from '../components/Admin/Reviews'

const Admindashboard = () => {

  
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex-grow p-4'>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/employee-management' element={<Employee/>} />
          <Route path='/reports' element={<Reviews/>} />
          <Route path='/task-management' element={<TaskManagement/>} />
          <Route path='/' element={<Navigate to = 'Dashboard' replace/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Admindashboard
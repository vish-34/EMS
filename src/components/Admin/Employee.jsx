import React from 'react'
import ProgressBar from '../ProgressBar'
import { Navigate, useNavigate } from 'react-router-dom'

const Employee = () => {

  const navigate = useNavigate();
  const handelClick = () => {
    navigate('/add-employee')
  }




  return (
    <div>
      <div>
      <div className='flex flex-col items-end justify-end flex-grow'>
        <div className='grid grid-cols-2 gap-10 mr-10'>
          <div  className='bg-yellow-500 h-[13em] w-[35em] rounded-lg p-3'>
            <h2 className='font-semibold text-2xl'>Total Employees</h2>
            <h1 className='font-bold text-4xl mt-16'>10</h1>
            <ProgressBar percentage={10} />
          </div>

          <div className='bg-emerald-500 h-[13em] w-[35em] rounded-lg p-3'>
            <h2 className='font-semibold text-2xl'>New Employees</h2>
            <h1 className='font-bold text-4xl mt-16'>10</h1>
            <ProgressBar percentage={10} />
          </div>

          <div className='bg-red-500 h-[13em] w-[35em] rounded-lg p-3'>
            <h2 className='font-semibold text-2xl'>Fired Employees</h2>
            <h1 className='font-bold text-4xl mt-16'>10</h1>
            <ProgressBar percentage={10} />
          </div>

          <div className='bg-purple-500 h-[13em] w-[35em] rounded-lg p-3'>
            <h2 className='font-semibold text-2xl'>Currently Working</h2>
            <h1 className='font-bold text-4xl mt-16'>10</h1>
            <ProgressBar percentage={10} />
          </div>
        </div>

        <div>
          <button onClick={handelClick} className='bg-green-400 h-[3em] w-[10em] mr-10 mt-2 rounded-lg'>Add Employee</button>
        </div>


        <div className='h-[50em] w-full bg-red-400 mt-10 px-10'>

        </div>
      </div>

   
    </div>
    </div>
  )
}

export default Employee
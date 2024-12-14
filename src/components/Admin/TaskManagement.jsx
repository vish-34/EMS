import React from 'react'
import ProgressBar from '../ProgressBar'
import { useNavigate } from 'react-router-dom'

const TaskManagement = () => {

  const navigate = useNavigate();

  
  const handelClick = () => {
    navigate('/create-task')
  }

  

  return (
    <div>
      <div>
        <div className='flex flex-col items-end justify-end flex-grow'>
          <div className='grid grid-cols-2 gap-10 mr-10'>
            <div className='bg-emerald-500 h-[13em] w-[35em] rounded-lg p-3'>
              <h2 className='font-semibold text-2xl'>Total Task</h2>
              <h1 className='font-bold text-4xl mt-16'>10</h1>
              <ProgressBar percentage={10} />
            </div>

            <div className='bg-pink-500 h-[13em] w-[35em] rounded-lg p-3'>
              <h2 className='font-semibold text-2xl'>Completed Task</h2>
              <h1 className='font-bold text-4xl mt-16'>10</h1>
              <ProgressBar percentage={10} />
            </div>

            <div className='bg-blue-500 h-[13em] w-[35em] rounded-lg p-3'>
              <h2 className='font-semibold text-2xl'>Pending Task</h2>
              <h1 className='font-bold text-4xl mt-16'>10</h1>
              <ProgressBar percentage={10} />
            </div>

            <div className='bg-purple-500 h-[13em] w-[35em] rounded-lg p-3'>
              <h2 className='font-semibold text-2xl'>Due Task</h2>
              <h1 className='font-bold text-4xl mt-16'>10</h1>
              <ProgressBar percentage={10} />
            </div>
          </div>
          
        <div>
          <button className='bg-green-400 h-[3em] w-[10em] mr-10 mt-2 rounded-lg'  onClick={handelClick}>Create Task</button>
        </div>
        </div>


        <div className=''>
          <div className='h-[5em] w-[72.5em] bg-white px-10 ml-[19em] mt-20 p-3 rounded-xl'>
            <p className='font-semibold text-black'>Task Name</p>
            <p className='text-black'>Task Description</p>
          </div>

          <div className='h-[5em] w-[72.5em] bg-white px-10 ml-[19em] mt-8 p-3 rounded-xl'>
            <p className='font-semibold text-black'>Task Name</p>
            <p className='text-black'>Task Description</p>
          </div>

          <div className='h-[5em] w-[72.5em] bg-white px-10 ml-[19em] mt-8 p-3 rounded-xl'>
            <p className='font-semibold text-black'>Task Name</p>
            <p className='text-black'>Task Description</p>
          </div>
          
          <div className='h-[5em] w-[72.5em] bg-white px-10 ml-[19em] mt-8 p-3 rounded-xl'>
            <p className='font-semibold text-black'>Task Name</p>
            <p className='text-black'>Task Description</p>
          </div>

          <div className='h-[5em] w-[72.5em] bg-white px-10 ml-[19em] mt-8 p-3 rounded-xl'>
            <p className='font-semibold text-black'>Task Name</p>
            <p className='text-black'>Task Description</p>
          </div>

          <div className='h-[5em] w-[72.5em] bg-white px-10 ml-[19em] mt-8 p-3 rounded-xl'>
            <p className='font-semibold text-black'>Task Name</p>
            <p className='text-black'>Task Description</p>
          </div>

          <div className='h-[5em] w-[72.5em] bg-white px-10 ml-[19em] mt-8 p-3 rounded-xl'>
            <p className='font-semibold text-black'>Task Name</p>
            <p className='text-black'>Task Description</p>
          </div>

          <div className='h-[5em] w-[72.5em] bg-white px-10 ml-[19em] mt-8 p-3 rounded-xl'>
            <p className='font-semibold text-black'>Task Name</p>
            <p className='text-black'>Task Description</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default TaskManagement
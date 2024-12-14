import React from 'react';
import ProgressBar from '../ProgressBar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const handelClick = () => {
    navigate('/employee-management')
  }


  return (
    <div>
      <div className='flex flex-col items-end justify-end flex-grow'>
        <div className='grid grid-cols-2 gap-10 mr-10'>
          <div onClick={handelClick} className='bg-emerald-500 h-[13em] w-[35em] rounded-lg p-3'>
            <h2 className='font-semibold text-2xl'>Employees</h2>
            <h1 className='font-bold text-4xl mt-16'>10</h1>
            <ProgressBar percentage={10} />
          </div>

          <div className='bg-red-500 h-[13em] w-[35em] rounded-lg p-3'>
            <h2 className='font-semibold text-2xl'>Running task</h2>
            <h1 className='font-bold text-4xl mt-16'>10</h1>
            <ProgressBar percentage={10} />
          </div>

          <div className='bg-yellow-500 h-[13em] w-[35em] rounded-lg p-3'>
            <h2 className='font-semibold text-2xl'>Projects</h2>
            <h1 className='font-bold text-4xl mt-16'>10</h1>
            <ProgressBar percentage={10} />
          </div>

          <div className='bg-blue-500 h-[13em] w-[35em] rounded-lg p-3'>
            <h2 className='font-semibold text-2xl'>Earning</h2>
            <h1 className='font-bold text-4xl mt-16'>10</h1>
            <ProgressBar percentage={10} />
          </div>
        </div>

        <div className='h-[50em] w-full bg-red-400 mt-10 px-10'>

        </div>
      </div>

   
    </div>
  );
}

export default Dashboard;
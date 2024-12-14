import React from 'react'
import ProgressBar from '../components/ProgressBar'
import { useNavigate } from 'react-router-dom'
import { removeLocalStorage } from '../utils/LocalStorage';

const Employeedashboard = () => {

    const navigate = useNavigate();

    const handelLogout = () => {
        removeLocalStorage('loggedInUser');
        navigate('/');
    };

    const handelClick = () => {
        navigate('/submit-task')
    }
    return (
        <div>
            <div className='flex items-start h-12 w-full bg-black p-2'>
                <h2 className='font-bold mt-1 px-3'>Employee Name</h2>
                <button onClick={handelLogout} className='ml-[80em] h-8 w-20 bg-gray-400 rounded-md '>Log out</button>
            </div>


            <div className='flex flex-wrap gap-10 items-center justify-center mt-10' >
                <div className='bg-blue-500 h-[13em] w-[40em] rounded-lg p-3'>
                    <h2 className='font-semibold text-2xl'>Total Task</h2>
                    <h1 className='font-bold text-4xl mt-16'>10</h1>
                    <ProgressBar percentage={10} />
                </div>

                <div className='bg-emerald-500 h-[13em] w-[40em] rounded-lg p-3'>
                    <h2 className='font-semibold text-2xl'>New Task</h2>
                    <h1 className='font-bold text-4xl mt-16'>10</h1>
                    <ProgressBar percentage={10} />
                </div>

                <div className='bg-purple-500 h-[13em] w-[40em] rounded-lg p-3'>
                    <h2 className='font-semibold text-2xl'>Task Completed</h2>
                    <h1 className='font-bold text-4xl mt-16'>10</h1>
                    <ProgressBar percentage={10} />
                </div>

                <div className='bg-red-500 h-[13em] w-[40em] rounded-lg p-3'>
                    <h2 className='font-semibold text-2xl'>Task Pending / Deadline</h2>
                    <h1 className='font-bold text-4xl mt-16'>10</h1>
                    <ProgressBar percentage={10} />
                </div>

            </div>
            <div>
                <button className='bg-green-400 h-[3em] w-[10em] ml-[79em] mt-2 rounded-lg' onClick={handelClick}>Submit Task</button>
            </div>

                <h1 className='font-bold text-2xl px-28 mt-10'>NEW TASK</h1>
            <div className='overflow-auto h-[20em]'>

                <div className='bg-emerald-900 h-[4em] w-[85em] ml-20 mt-6 p-2 rounded-xl'>
                    <h1 className='font-bold'>Task Name</h1>
                    <h2>Task Description</h2>
                </div>

                <div className='bg-emerald-900 h-[4em] w-[85em] ml-20 mt-6 p-2 rounded-xl'>
                    <h1 className='font-bold'>Task Name</h1>
                    <h2>Task Description</h2>
                </div>

                <div className='bg-emerald-900 h-[4em] w-[85em] ml-20 mt-6 p-2 rounded-xl'>
                    <h1 className='font-bold'>Task Name</h1>
                    <h2>Task Description</h2>
                </div>

                <div className='bg-emerald-900 h-[4em] w-[85em] ml-20 mt-6 p-2 rounded-xl'>
                    <h1 className='font-bold'>Task Name</h1>
                    <h2>Task Description</h2>
                </div>

                <div className='bg-emerald-900 h-[4em] w-[85em] ml-20 mt-6 p-2 rounded-xl'>
                    <h1 className='font-bold'>Task Name</h1>
                    <h2>Task Description</h2>
                </div>

                <div className='bg-emerald-900 h-[4em] w-[85em] ml-20 mt-6 p-2 rounded-xl'>
                    <h1 className='font-bold'>Task Name</h1>
                    <h2>Task Description</h2>
                </div>

                <div className='bg-emerald-900 h-[4em] w-[85em] ml-20 mt-6 p-2 rounded-xl'>
                    <h1 className='font-bold'>Task Name</h1>
                    <h2>Task Description</h2>
                </div>


            </div>
        </div>
    )
}

export default Employeedashboard
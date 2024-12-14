// src/Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { removeLocalStorage } from '../utils/LocalStorage';

const Sidebar = () => {

  const navigate = useNavigate();

  const handelLogout = () => {
    removeLocalStorage('loggedInUser');
    navigate('/');
  };


  return (
    <div className="w-64 h-screen fixed bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-2xl font-semibold">Admin</h1>
      </div>
      <ul className="flex flex-col space-y-4 p-4">
        <li>
          <Link to="/admin-dashboard/dashboard"  className="hover:bg-gray-700 p-2 rounded-md">Dashboard Overview</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/employee-management" className="hover:bg-gray-700 p-2 rounded-md">Employee Management</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/task-management" className="hover:bg-gray-700 p-2 rounded-md">Task Management</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/reports" className="hover:bg-gray-700 p-2 rounded-md">Reports</Link>
        </li>
        <li>
          <button className="hover:bg-gray-700 p-2 rounded-md" onClick={handelLogout}>Log out</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

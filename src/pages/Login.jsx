import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/LocalStorage';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const loggedInUser = getLocalStorageItem('loggedInUser');
    if (loggedInUser) {
      if (loggedInUser.role === 'Admin') {
        navigate('/admin-dashboard')
      }
      else if (loggedInUser.role === 'Employee') {
        navigate('/employee-dashboard')
      }
    }
  }, [navigate])


  const handleLogin = (e) => {
    e.preventDefault();

    const users = getLocalStorageItem('user')

    if (users) {

      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {

        setLocalStorageItem('loggedInUser', { username: user.username, role: user.role });

        if (user.role === 'Admin') {
          navigate('/admin-dashboard');
        }
        else if (user.role === 'Employee') {
          navigate('/employee-dashboard');
        }

        else {
          setError('no user found')
        }
      }

      else {
        setError('Invalid username or password')
      }
    }

  };

  return (
    <div className="flex items-center justify-center h-screen w-screen  bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center bg-white p-8 shadow-lg rounded-lg"
      >
        <h1 className="text-2xl font-semibold mb-6 text-black">Enter the EMS</h1>

        {/* Username Input */}
        <input
          className="p-2 text-black rounded-lg bg-gray-50 border-2 w-72 mb-5"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password Input */}
        <input
          className="p-2 text-black rounded-lg bg-gray-50 border-2 w-72 mb-5"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Remember Me Checkbox */}
        <label className="text-sm flex items-center w-full mb-3">
          <input type="checkbox" className="rounded-lg mr-2 text-black" />
          <h3 className='text-black'>Remember Me</h3>
          <span className="ml-auto text-blue-600 cursor-pointer">Forgot?</span>
        </label>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold rounded-lg mt-6 h-10 w-full hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

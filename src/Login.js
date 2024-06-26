import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import Card from './Card'; // Import the Card component

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Define navigate using useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://rest-api-backend-0htc.onrender.com/login/', {
        username,
        password,
      });
      setMessage('Login successful');
      navigate('/greeting', { state: { username } });
    } catch (error) {
      setMessage('Error logging in');
    }
  };

  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-2 text-sm">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            id="username"
            placeholder="Username"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            required
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="text-sm">Password</label>
            <a href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            placeholder="*****"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            required
          />
        </div>
        <div>
          <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-white dark:text-gray-50">Login</button>
        </div>
      </form>
      {message && <p className="text-red-500">{message}</p>}
    </Card>
  );
};

export default Login;

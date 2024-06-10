// src/Greeting.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Greeting = () => {
  const location = useLocation();
  const { username } = location.state || { username: 'Guest' };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Hello, {username}!</h1>
    </div>
  );
};

export default Greeting;

// pages/login.js
"use client"
import Cookies from 'js-cookie';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
        const response = await axios.post('https://ims-devsandbox.codeivy.io/api/login', {
          email,
          password,
        });
        Cookies.set('user', JSON.stringify(email), { expires: 7 });
        document.location.href = '/'
      } catch (error) {
        Cookies.set('user', JSON.stringify(email), { expires: 7 });
        setError('Login failed. Please check your credentials.');
        document.location.href = '/'
      }
    };
  
    const isDisabled = email.trim() === '' || password.trim() === '';
  
    return (
      <div className='w-full flex flex-col items-center h-screen h-min-screen'>
         <h1 className='text-center font-bold text-3xl mt-[7%]'>Login Page</h1>
         <form onSubmit={handleSubmit} className='w-[20%] mt-[10%]'>
          <div className='w-[100%] flex justify-between'>
            <label className='text-lg font-semibold'>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='w-[100%] flex justify-between mt-5 flex justify-between'>
            <label className='text-lg font-semibold'>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='w-full flex justify-center'>
            <button type="submit" className={`ml-4 w-fit font-bold mt-5 text-xl bg-blue-700 rounded-lg px-3 py-2 text-white ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isDisabled}>Login</button>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    );
  }
  
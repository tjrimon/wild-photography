import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='h-[85vh] bg-gray-200 flex justify-center items-center'>
            <div><form className='w-96 bg-pink-100 py-10 px-10 rounded-lg'>
                <h1 className='pb-3 font-semibold text-xl '>Registration Here</h1>
                <div className="">                         <label htmlFor="name" className='text-sm font-semibold'>Name</label>
                    <input className='block border-gray-300 rounded-lg mt-1 px-4 py-2.5 mb-3 w-full focus:border-indigo-500 focus:ring-indigo-500' type="text" id='name' placeholder='Enter your Name' />
                </div>
                <div className="">
                    <label htmlFor="email" className='text-sm font-semibold'>Email</label>
                    <input className='block border-gray-300 rounded-lg mt-1 px-4 py-2.5 mb-3 w-full focus:border-indigo-500 focus:ring-indigo-500' type="email" id='email' placeholder='Enter your email' />
                </div>
                <div className="">                         <label htmlFor="password" className='text-sm font-semibold'>Password</label>
                    <input type="password" className='block border-gray-300  px-4 py-2.5 rounded-lg mt-1 mb-3 w-full' id='password' placeholder='Enter your password' />
                </div>
                <p className='text-red-500'></p>
                <button className='w-full rounded-lg bg-indigo-600 text-white py-3 mt-5 text-sm font-semibold' type='submit' >Sign Up</button>
                <p className='pt-7'> Already Registered ? <span className='text-indigo-700 font-semibold'><Link to='/login'>Login</Link></span></p>
            </form></div>
        </div>
    );
};

export default Registration;
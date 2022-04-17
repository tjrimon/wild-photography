import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Section/SocialLogin';


const Login = () => {
    return (
        <div className='bg-gray-200'>
            <div className='md:w-[800px] mx-auto md:h-[85vh] pb-20 md:flex justify-center items-center'>
                <div className='w-[320px] py-20 mx-auto md:mr-auto'>
                    <SocialLogin></SocialLogin>
                </div>
                <form className='w-[20rem] md:ml-auto mx-auto md:w-96 bg-pink-100 py-10 px-10 rounded-lg'>
                    <h1 className='pb-3 font-semibold text-xl '>Login Here</h1>
                    <div className="">
                        <label htmlFor="email" className='text-sm font-semibold'>Email</label>
                        <input required className='block border-gray-300 rounded-lg mt-1 mb-3 w-full focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5' type="email" id='email' placeholder='Enter your email' />
                    </div>
                    <div className="">                         <label htmlFor="password" className='text-sm font-semibold' >Password</label>
                        <input required type="password" className='block border-gray-300 rounded-lg mt-1 mb-3 w-full px-4 py-2.5' id='password' placeholder='Enter your password' />
                    </div>
                    <p className='text-red-500'></p>
                    <button className='w-full rounded-lg bg-indigo-600 text-white py-3 mt-5 text-sm font-semibold' type='submit'>Login</button>
                    <p className='pt-7'> New Here ? <span className='text-indigo-700 font-semibold'><Link to='/registration'>Sign up</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
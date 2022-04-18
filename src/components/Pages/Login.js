import React, { useRef } from 'react';
import SocialLogin from '../Section/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='bg-gray-200'>
            <div className='md:w-[800px] mx-auto md:h-[85vh] pb-20 md:flex justify-center items-center'>
                <div className='w-[320px] py-20 mx-auto md:mr-auto'>
                    <SocialLogin></SocialLogin>
                </div>
                <div className='w-[20rem] md:ml-auto mx-auto md:w-96 bg-pink-100 py-10 px-10 rounded-lg'>
                    <form onSubmit={handleSubmit} >
                        <h1 className='pb-3 font-semibold text-xl '>Login Here</h1>
                        <div className="">
                            <label htmlFor="email" className='text-sm font-semibold'>Email</label>
                            <input ref={emailRef} required className='block border-gray-300 rounded-lg mt-1 mb-3 w-full focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5' type="email" id='email' placeholder='Enter your email' />
                        </div>
                        <div className="">                         <label htmlFor="password" className='text-sm font-semibold' >Password</label>
                            <input required ref={passwordRef} type="password" className='block border-gray-300 rounded-lg mt-1 mb-3 w-full px-4 py-2.5' id='password' placeholder='Enter your password' />
                        </div>
                        <p className='text-red-500'>{errorElement}</p>
                        <button className='w-full rounded-lg bg-indigo-600 text-white py-3 mt-5 text-sm font-semibold' type='submit'>Login</button>
                        <p className='pt-7'> New Here ? <span className='text-indigo-700 font-semibold'><Link to='/registration'>Sign up</Link></span></p>
                    </form>
                    <p className='pt-7'> forget Password ? <button onClick={resetPassword} className='text-red-700 font-semibold'>Reset Password</button></p>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Login;
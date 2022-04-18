import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <button className='w-full rounded-lg bg-black text-white py-3 mt-5 text-sm font-semibold' type='submit' onClick={() => signInWithGithub()} >Github</button>
            <button onClick={() => signInWithGoogle()} className='w-full rounded-lg bg-[#FABB05] text-white py-3 mt-5 text-sm font-semibold' type='submit' >Google</button>
            {errorElement}
        </div>
    );
};

export default SocialLogin;
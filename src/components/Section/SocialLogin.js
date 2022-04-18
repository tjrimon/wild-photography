import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './Loading';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";

    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }

    if (googleError || githubError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
    }

    if (googleUser || githubUser) {
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
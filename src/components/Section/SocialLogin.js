import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <button className='w-full rounded-lg bg-black text-white py-3 mt-5 text-sm font-semibold' type='submit' >Github</button>
            <button className='w-full rounded-lg bg-[#1D9BF0] text-white py-3 mt-5 text-sm font-semibold' type='submit' >Twitter</button>
            <button className='w-full rounded-lg bg-[#FABB05] text-white py-3 mt-5 text-sm font-semibold' type='submit' >Google</button>
        </div>
    );
};

export default SocialLogin;
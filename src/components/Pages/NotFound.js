import React from 'react';
import Image from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center mt-28 md:mt-48 lg:mt-0'>
            <img className='md:w-[60%]' src={Image} alt="" />
        </div>
    );
};

export default NotFound;
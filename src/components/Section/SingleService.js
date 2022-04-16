import React from 'react';

const SingleService = ({ service }) => {
    const { name, description, price, img } = service
    return (
        <div className='text-center w-[350px] lg:w-[400px] border border-gray-300 shadow-lg rounded-md mx-auto'>
            <img className='rounded-t-md' src={img} alt="" />
            <div className='py-8'>
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <p className='py-3 px-6'>{description.slice(0, 100)}...</p>
                <p className=' pb-2 font-bold text-lg'>Price: $ {price}</p>
                <button className='text-lg bg-indigo-600 text-white py-2 px-8 rounded '>Book Now</button>
            </div>
        </div>
    );
};

export default SingleService;
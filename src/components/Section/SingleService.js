import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { id, name, description, price, img } = service;
    const navigate = useNavigate();
    const dynamicRoute = id => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className='text-center w-[350px] lg:w-[400px] border border-gray-300 shadow-lg rounded-md mx-auto'>
            <img className='rounded-t-md' src={img} alt="" />
            <div className='py-8'>
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <p className='py-3 px-6'>{description.slice(0, 100)}...</p>
                <p className=' pb-2 font-bold text-lg'>Price: $ {price}</p>
                <button onClick={() => dynamicRoute(id)} className='text-lg bg-indigo-600 text-white py-2 px-8 rounded '><Link to="/checkout">Book Now</Link></button>
            </div>
        </div>
    );
};

export default SingleService;
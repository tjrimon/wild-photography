import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className="container flex justify-around items-center py-5">
                <div>
                    <h3 className='text-5xl font-serif font-semibold py-2'>Bengal Fly</h3>
                    <p>| Wild Photography |</p>
                </div>
                <div>
                    <p>Phone: 171234567</p>
                    <p>Email: admin@bengalfly.com</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='py-3 bg-gray-400'><p className='text-center'>Developed and Maintain by Bengal Fly</p></div>
        </div>
    );
};

export default Footer;
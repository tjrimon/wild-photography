import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between py-3 container items-center mx-auto'>
                <div className="w-52">
                    <img className='' src={logo} alt='logo' />
                </div>
                <div>
                    <nav>
                        <ul className='flex items-center'>
                            <li className='mr-3 text-lg font-semibold'><NavLink to='/'>Home</NavLink></li>
                            <li className='mr-3 text-lg font-semibold'><NavLink to='/about'>About</NavLink></li>
                            <li className='mr-3 text-lg font-semibold'><NavLink to='/login'>Login</NavLink></li>
                            <li className='mr-3 text-lg bg-red-600 text-white py-2 px-6 rounded-full'><NavLink to='/registration'>Sign up</NavLink></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Header;
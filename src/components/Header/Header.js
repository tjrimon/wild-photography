import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { LoginIcon } from '@heroicons/react/solid'

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
                            <li className='mr-3  font-semibold'><NavLink to='/'>Home</NavLink></li>
                            <li className='mr-3 font-semibold'><NavLink to='/about'>About</NavLink></li>
                            <li className='mr-3 font-semibold'><NavLink to='/blogs'>Blogs</NavLink></li>
                            {/* <li className='mr-3 text-lg font-semibold'><NavLink to='/login'></NavLink></li> */}
                            <li className='mr-3 text-sm font-semibold bg-indigo-600 text-white py-2.5 px-6 rounded-full flex'>{<LoginIcon className='w-5 h-5 '></LoginIcon>} <NavLink className='pl-1' to='/login'>Login</NavLink></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Header;
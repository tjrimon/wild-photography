import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Link } from 'react-router-dom';
import auth from '../../firebase.init'
import logo from '../../images/logo.png';
import { LoginIcon, MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className="bg-indigo-300">
            <div className='container mx-auto md:flex items-center justify-between '>
                <div className='flex justify-between items-center py-4 md:py-0 mx-5 md:mx-0'><h3 className='text-2xl font-mono font-bold'><Link to='/'>Bengal Fly</Link></h3>
                    <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>{open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>} </div></div>
                <nav>
                    <ul className={`md:flex pl-10 justify-center items-center py-5 absolute duration-200 md:static ease-in bg-indigo-300 w-full ${open ? 'top-19 border-t border-white' : 'top-[-220px]'}`}>
                        <li className='mr-3  font-semibold'><NavLink to='/'>Home</NavLink></li>
                        <li className='mr-3 font-semibold'><NavLink to='/about'>About</NavLink></li>
                        <li className='mr-3 font-semibold'><NavLink to='/blogs'>Blogs</NavLink></li>
                        {/* <li className='mr-3 text-lg font-semibold'><NavLink to='/login'></NavLink></li> */}
                        <li className='md:flex w-36 mr-3 text-sm font-semibold bg-indigo-600 text-white py-2.5 px-6 rounded-full flex'>{user ?
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                            : <><LoginIcon className='w-5 h-5 '></LoginIcon> <NavLink className='pl-1' to='/login'>Login</NavLink> </>
                        }
                        </li>
                    </ul>
                    {/* <ul className='w-36 md:disabled:'>
                        <li className='mr-3 text-sm font-semibold bg-indigo-600 text-white py-2.5 px-6 rounded-full flex'>{user ?
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                            : <><LoginIcon className='w-5 h-5 '></LoginIcon> <NavLink className='pl-1' to='/login'>Login</NavLink> </>
                        }
                        </li>
                    </ul> */}
                </nav>
            </div>
        </div >

    );
};

export default Header;
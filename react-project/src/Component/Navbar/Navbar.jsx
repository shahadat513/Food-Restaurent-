import React from 'react';
import logo from '../../../public/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-around'>
            <div>
                <img className='w-20 h-16 object-cover' src={logo} alt="" />
            </div>
            <div className='my-auto'>
                <ul className='flex gap-10'>
                    <NavLink to={"/"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='font-semibold text-xl '>Home</li>
                    </NavLink>
                    <NavLink to={"Menu"}className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='font-semibold text-xl '>Menu</li>
                    </NavLink>
                    <NavLink to={"Services"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='font-semibold text-xl '>Services</li>
                    </NavLink>
                    <NavLink to={"Contact Us"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='font-semibold text-xl '>Contact Us</li>
                    </NavLink>
                </ul>
            </div>
            <div className='my-auto'><button className="btn bg-red-500 text-white">Log In</button></div>
        </div>
    );
}

export default Navbar;

import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import logo from '../../../assets/Images/logo.png'


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const Navigate = useNavigate();

    const handelLogOut = () => {
        logOut()
            .then(res => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Log out successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate('/');
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2500
                })
            })
    }

    const link = <>
        <li><NavLink to='/' className={({ isActive }) =>
            isActive ? "text-base font-bold text-[#1F4B3F] underline" : "text-base font-semibold"
        }>
            Home
        </NavLink></li>
        <li>{
            user ? <button onClick={handelLogOut} className={({ isActive }) =>
            isActive ? "text-base font-bold text-[#1F4B3F] underline" : "text-base font-semibold"
        }>
            Log Out
        </button> : <NavLink to='/login' className={({ isActive }) =>
            isActive ? "text-base font-bold text-[#1F4B3F] underline" : "text-base font-semibold"
        }>
            Login
        </NavLink>
            }</li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1F4B3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <div className='flex items-center gap-4'>
                <img src={logo} alt="" className='w-10 h-10'/>
                <h4 className='text-2xl font-bold text-[#1F4B3F]'>TM <span className='text-black'>.</span></h4>
                </div>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#85D7A9]'>
            <div className='h-[15vh]  w-[90%] mx-auto flex justify-between items-center'>
                <div>
                    <Link to={"/"}><img className='w-[120px]' src={logo} alt="Company Logo" /></Link>
                </div>

                <div className='links text-white text-lg flex gap-8 items-center justify-between'>
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline font-bold" : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to={"/purchasedEvents"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline font-bold" : ""
                        }
                    >
                        Purchased Events
                    </NavLink>

                    <NavLink
                        to={"/blogs"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline font-bold" : ""
                        }
                    >
                        Blogs
                    </NavLink>
                </div>


                <div>
                    <Link to={"/login"}>
                        <button className='px-6 py-2 text-[#85D7A9] text-lg font-bold bg-white rounded-lg'>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
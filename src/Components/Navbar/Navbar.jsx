import React, { useContext } from 'react';
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const Navbar = () => {
    let { signedInUser, logOut } = useContext(AuthContext);

    let handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Log Out Succesfull");
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className='bg-[#85D7A9]'>
            <div className='h-[30vh] md:h-[20vh] lg:-[15vh] w-[90%] mx-auto flex flex-col md:flex-row justify-around md:justify-between items-center'>
                <div>
                    <Link to={"/"}><img className=' w-[70px] md:w-[90px] lgw-[120px]' src={logo} alt="Company Logo" /></Link>
                </div>

                <div className='links text-white text-sm md:text-lg flex gap-8 items-center justify-between'>
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline font-bold" : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to={"/planners"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline font-bold" : ""
                        }
                    >
                        Event Planners
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
                    {
                        signedInUser ?
                            <div className='flex flex-col justify-center items-center'>
                                <div className='flex items-center gap-2'>
                                    <img className='w-[30px] md:w-[40px] rounded-full' src={`${signedInUser.photoURL}`} />
                                    <button onClick={handleLogout} className='px-4 border border-white py-1 md:py-2 text-[#85D7A9] font-bold bg-white rounded-lg hover:text-white hover:border hover:border-white hover:bg-[#85D7A9]'>Logout</button>
                                </div>
                                <div>
                                    <p className='text-white font-bold'>{signedInUser.displayName}</p>
                                </div>
                            </div>
                            :
                            <Link to={"/login"}>
                                <button className='px-3 md:px-4 lg:px-6 border border-white py-2 text-[#85D7A9] text-sm lg:text-lg font-bold bg-white rounded-lg hover:text-white hover:border hover:border-white hover:bg-[#85D7A9]'>
                                    Login
                                </button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
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
                    {
                        signedInUser ?
                            // <div className='flex flex-col items-center'>
                            //     <div className="dropdown dropdown-end">
                            //         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            //             <div className="w-12 rounded-full">
                            //                 <img src={`${signedInUser.photoURL}`} />
                            //             </div>
                            //         </label>
                            //         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            //             <li><button onClick={handleLogout}>Logout</button></li>
                            //         </ul>
                            //     </div>
                            //     <p className='text-white font-bold'>{signedInUser.displayName}</p>
                            // </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='flex items-center gap-2'>
                                    <img className='w-[40px] rounded-full' src={`${signedInUser.photoURL}`} />
                                    <button onClick={handleLogout} className='px-4 border border-white py-2 text-[#85D7A9] font-bold bg-white rounded-lg hover:text-white hover:border hover:border-white hover:bg-[#85D7A9]'>Logout</button>
                                </div>
                                <div>
                                <p className='text-white font-bold'>{signedInUser.displayName}</p>
                                </div>
                            </div>
                            :
                            <Link to={"/login"}>
                                <button className='px-6 border border-white py-2 text-[#85D7A9] text-lg font-bold bg-white rounded-lg hover:text-white hover:border hover:border-white hover:bg-[#85D7A9]'>
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
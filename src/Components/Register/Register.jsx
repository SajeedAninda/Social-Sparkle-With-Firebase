import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import Swal from 'sweetalert2';
import { getAuth, updateProfile } from 'firebase/auth';
import { app } from '../Authentication/firebase.config';
const auth = getAuth(app);
import logo from "../../assets/Social_Sparkle.jpeg";

const Register = () => {
    let navigate = useNavigate();
    let { register } = useContext(AuthContext);
    let handleRegister = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let name = e.target.fullName.value;
        let img = e.target.imgUrl.value;


        if (password.length < 6) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Length should be at least 6 Characters!'
            })
        }

        if (!/[A-Z]/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should contain at least one capital letter!'
            })
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should contain at least one special character!'
            })
        }
        register(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: img
                }).then(() => {

                }).catch((error) => {
                    console.log(error);
                });
                navigate(location?.state ? location.state : '/');
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if (errorCode === "auth/email-already-in-use") {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email Already in Use!'
                    })
                }
            });
    }

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}
            >
                <div className="md:flex w-full items-center">
                    <div className='flex-1 p-8'>
                        <img className='rounded-xl' src={logo} alt="" />
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10 flex-1">
                        <div className="text-center mb-10">
                            <h1 className="text-[#033430] font-bold text-3xl">REGISTER</h1>
                            <p className='text-[#033430]'>Enter your information to register</p>
                            <p className='font-semibold text-[#033430] text-lg'>Already have an Account? <Link to={"/login"}><span className='text-[#51c081] font-bold hover:underline cursor-pointer'>Login</span></Link></p>
                        </div>
                        <form onSubmit={handleRegister}>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label for="" className="text-xs font-semibold px-1">Full Name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input
                                            type="text"
                                            required
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="John Smith"
                                            name="fullName"
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label for="" className="text-xs font-semibold px-1">Image Link</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input
                                            type="text"
                                            required
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="img.jpg"
                                            name="imgUrl"
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label for="" className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input
                                            type="email"
                                            required
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="johnsmith@example.com"
                                            name="email"
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label for="" className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"
                                            name="password"
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <p className='text-red-600'></p>
                                    <button className="block w-full max-w-xs mx-auto bg-[#033430] hover:bg-white border-2 border-[#033430] text-white hover:text-[#033430] hover:border-2 hover:border-[#033430] font-bold rounded-lg px-3 py-3">REGISTER NOW</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
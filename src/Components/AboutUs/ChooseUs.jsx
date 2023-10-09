import React from 'react';
import "./choose.css";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import companyImg from "../../assets/Social_Sparkle.jpeg"
import { Link } from 'react-router-dom';

const ChooseUs = () => {
    return (
        <div className=' chooseBg'>
            <div className='w-[90%] mx-auto'>
                <div className='text-center space-y-4 pt-10'>
                    <h1 className='text-[#033430] font-bold text-4xl  md:text-5xl'>About Us</h1>
                    <h3 className='text-[#033430] font-semibold text-xl'>At <span className='font-bold underline'>Social Spark</span>, we understand that every social event is a unique and special occasion, filled with dreams, expectations, and emotions. That's why we're dedicated to being your trusted partner in creating unforgettable moments. When you choose us, you're not just selecting an event management company; you're selecting an experience tailored to your vision, needs, and desires.</h3>
                </div>
                <section className="flex items-center pb-10 font-poppins">
                    <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8" data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                                <div className="flex gap-6 md:gap-0 flex-wrap" >
                                    <div className="w-full px-4 md:w-1/2">

                                        <img src={companyImg} alt=""
                                            className="object-cover w-full mb-6 rounded-lg h-80" />
                                        <img src={about1} alt=""
                                            className="object-cover w-full rounded-lg h-80" />
                                    </div>
                                    <div className="w-full px-4 md:w-1/2 xl:mt-11">
                                        <img src={about2} alt=""
                                            className="object-cover w-full mb-6 rounded-lg h-80" />
                                        <img src={about3} alt=""
                                            className="object-cover w-full rounded-lg h-80" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8" data-aos="zoom-in-down" data-aos-anchor-placement="top-bottom">
                                <span className="text-[#033430] font-bold text-2xl">Why choose us?</span>
                                <h2 className="mt-2 mb-4 text-[#033430] font-medium text-lg">
                                    With years of experience in the industry, our team of seasoned professionals possesses the knowledge and expertise to turn your ideas into reality.
                                </h2>




                                <ul className="mb-10">
                                    <li className="flex items-center mb-4 text-base text-[#033430]">
                                        <span className="mr-3 text-[#033430]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Personalized Service: </span> Tailored to your style and preferences.</span>
                                    </li>

                                    <li className="flex items-center mb-4 text-base text-[#033430]">
                                        <span className="mr-3 text-[#033430]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Creativity and Innovation:</span> Fresh ideas and cutting-edge concepts.</span>
                                    </li>

                                    <li className="flex items-center mb-4 text-base text-[#033430]">
                                        <span className="mr-3 text-[#033430]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Attention to Detail:</span> Meticulous planning for flawless execution.</span>
                                    </li>


                                    <li className="flex items-center mb-4 text-base text-[#033430]">
                                        <span className="mr-3 text-[#033430]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Budget-Friendly Solutions:</span>Maximum impact without breaking the bank.</span>
                                    </li>


                                    <li className="flex items-center mb-4 text-base text-[#033430]">
                                        <span className="mr-3 text-[#033430]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Stress-Free Planning: </span>We handle logistics and coordination.</span>
                                    </li>

                                </ul>


                                <Link to={"/login"}
                                    className="px-5 py-3 font-bold rounded-lg text-gray-100 bg-[#033430] hover:text-[#033430] hover:bg-white">
                                    Login to Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ChooseUs;
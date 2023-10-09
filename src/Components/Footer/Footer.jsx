import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="p-4 footerBg md:p-8 lg:p-10">
            <div>
                <div  className="flex justify-center">
                    <Link to={"/"}>
                        <img className='w-[140px]' src={logo} alt="" />
                    </Link>
                </div>
                <p className="my-6 text-[#033430] font-bold text-center text-xl">From Concept to Reality, Your Event, Our Expertise – Making Memories Last a Lifetime</p>
                <ul className="flex flex-wrap justify-center items-center mb-6  text-[#033430]">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
                    </li>
                    <li>
                        <Link to={"/planners"} className="mr-4 hover:underline md:mr-6 ">Event Planners</Link>
                    </li>
                    <li>
                        <Link to={"/blogs"} className="mr-4 hover:underline md:mr-6">Blogs</Link>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                <div className='flex justify-center'>
                <span className="text-lg text-center font-semibold text-[#033430]">© 2023 <a href="#" className="hover:underline">Social Sparkle™</a> <p>All Rights Reserved.</p></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import "./cards.css";

const ServicesDetails = () => {
    let serviceData = useLoaderData();
    let { id } = useParams();
    let idInt = parseInt(id);
    let serviceDetails = serviceData.find(details => details.id === idInt);
    let { name, price, detailed_image, detailed_description } = serviceDetails;

    console.log(id);
    return (
        <div className='bg'>
            <div className='w-[90%] mx-auto py-20 flex items-center '>
                <div>
                    <img src={detailed_image} className='w-[85%] rounded-xl shadow-2xl' alt="" />
                </div>
                <div className='space-y-8'>
                    <h5 className="mb-2 text-4xl font-bold tracking-tight text-[#033430]">{name}</h5>
                    <p className="mb-3 font-normal text-xl text-[#033430]">{detailed_description}</p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#033430]">Starts From {price}</h5>
                    <Link className=' mt- 6' to={`/`}>
                        <button className="border-2 border-[#417759] mt-6 inline-flex items-center px-8 py-3 text-sm font-medium text-center text-[#033430] bg-white rounded-lg hover:bg-[#417759] hover:text-white">
                            Go Back
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;
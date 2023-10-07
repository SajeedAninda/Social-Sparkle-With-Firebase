import React from 'react';
import "./cards.css";
import { Link } from 'react-router-dom';

const ServiceCards = ({ service }) => {
    let { id, name, thumbnail_image, price, short_description } = service;
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cardsBg flex flex-col">
            <img className="rounded-t-lg w-full h-[200px] object-cover" src={thumbnail_image} alt="" />
            <div className="p-5 flex flex-col flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#033430]">{name}</h5>
                <p className="mb-3 font-normal text-[#033430]">{short_description}</p>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-[#033430]">Starts From {price}</h5>
                <Link className='mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#033430] bg-white rounded-lg hover:bg-[#417759] hover:text-white' to={`/servicesDetails/${id}`}>
                        See Details
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCards;
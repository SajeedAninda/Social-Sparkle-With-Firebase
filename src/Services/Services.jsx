import React, { useEffect, useState } from 'react';
import ServiceCards from './ServiceCards';

const Services = () => {
    let [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/eventData.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='my-12'>
            <div className='text-center space-y-2 mb-6'>
                <h1 className='text-[#033430] font-bold text-5xl'>Our Services</h1>
                <h3 className='text-[#033430] font-semibold text-xl'>What We Offer</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto'>
                {
                    services.map(service => <ServiceCards key={service.id} service={service}></ServiceCards>)
                }
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='py-28'>
            <h3 className='text-center pb-8 text-4xl font-bold uppercase'>My Services</h3>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 container mx-auto'>
                {services.map(service => <SingleService key={service.id} service={service}></SingleService>)}
            </div>
        </div>
    );
};

export default Services;
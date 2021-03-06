import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    return (
        <div>
            <h2>You are about To book : {service.name}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Chekout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;
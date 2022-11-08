import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from '../../Shared/ServiceCard';

const Services = () => {
    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])
    useTitle("Services")
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className='my-32'>
                <h2 className='text-4xl my-10'>Services</h2>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-32'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>

            </div>


            <div className='my-32'>
                <h2 className='text-4xl my-10'>Reviews</h2>
                <form className='md:mx-32'>
                    {
                        user ? <textarea name="details" className="textarea textarea-bordered h-24 w-full" placeholder="Add a Review" required></textarea> : "Please login to add review"
                    }
                    <input className='btn' type="submit" value="Post" />
                </form>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-32'>

                </div>

            </div>
        </div>
    );
};

export default Services;
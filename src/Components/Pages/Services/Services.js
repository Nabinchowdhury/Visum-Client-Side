import React, { useContext, useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from '../../Shared/ServiceCard';

const Services = () => {
    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useTitle("Services")


    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <div className='my-32'>
                <h2 className='text-4xl my-10'>Services</h2>
                {
                    loading ? <div className='w-20 mx-auto'>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
                    </div>
                        :
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-32'>
                            {
                                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                            }
                        </div>
                }


            </div>



        </div>
    );
};

export default Services;
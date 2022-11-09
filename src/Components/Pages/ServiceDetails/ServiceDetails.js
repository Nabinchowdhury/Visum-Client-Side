import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const ServiceDetails = () => {
    useTitle('Service Details')
    const service = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(service)
    const { _id, serviceName, photo, price, details, providerName } = service
    return (
        <div className='my-32'>
            <h2 className='text-4xl my-10'>Service Details</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl md:mx-32">
                <figure><img src={photo} alt="Album" style={{ "height": "400px" }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Service Name: {serviceName}</h2>
                    <p className='text-left'>Price: {price}</p>
                    <p className='text-left'>Provider Name: {providerName}</p>
                    <p className='text-left'>Details: {details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Get an Appointment</button>
                    </div>
                </div>
            </div>



            <div className='my-32'>
                <h2 className='text-4xl my-10'>Reviews</h2>
                <div className='md:mx-32'>
                    {
                        user ? <form>
                            <textarea name="details" className="textarea textarea-bordered h-24 w-full" placeholder="Add a Review" required></textarea>
                            <input className='btn' type="submit" value="Post" />
                        </form>
                            : <div>Please <Link to="/login" className='underline text-blue-700'> login </Link> to add review</div>
                    }

                </div>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-32'>

                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;
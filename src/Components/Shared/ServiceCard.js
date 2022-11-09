import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, photo, price, serviceName, providerName, details } = service
    // console.log(service)
    return (
        <div>
            <div className="card card-compact w-auto bg-base-100 shadow-xl">
                <figure >
                    <PhotoProvider>
                        <PhotoView src={photo}>
                            <img src={photo} style={{ objectFit: 'cover' }} className='w-full' alt="" />
                        </PhotoView>
                    </PhotoProvider>

                </figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{serviceName}</h2>
                    <p className='text-lg font-semibold text-left'>Price: ${price}</p>
                    <p className='text-lg font-semibold text-left'>Details: {details.slice(0, 55) + "..."}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}> <button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;
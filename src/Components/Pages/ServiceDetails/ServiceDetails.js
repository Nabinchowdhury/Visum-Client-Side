import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ReviewCard from './ReviewCard';

const ServiceDetails = () => {
    useTitle('Service Details')
    const service = useLoaderData()
    const { user, logUserOut } = useContext(AuthContext)

    const { _id, serviceName, photo, price, details, providerName, email } = service

    const [reviews, setReviews] = useState([])
    // console.log(reviews)
    useEffect(() => {
        if (user) {
            fetch(`https://b6a11-service-review-server-side-nabinchowdhury.vercel.app/reviews?service=${_id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('serviceReview-token')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        return logUserOut()
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data)
                    setReviews(data)
                })
        }
    }, [_id, logUserOut, user])

    const handleAddReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewMsg = form.review.value

        const review = {
            service_id: _id,
            serviceName,
            reviewMsg,
            picture: user?.photoURL,
            reviewer_email: user?.email,
            name: user?.displayName,
            date: new Date()
        }
        // console.log(review)
        fetch(`https://b6a11-service-review-server-side-nabinchowdhury.vercel.app/addReview`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully Added');
                    form.reset()
                    setReviews([review, ...reviews])
                }
            }).catch(err => console.log(err))
    }
    return (
        <div className='my-32'>
            <h2 className='text-4xl my-10'>Service Details</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl md:mx-32">
                <figure><img src={photo} alt="Album" style={{ "height": "400px" }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Service Name: {serviceName}</h2>
                    <p className='text-left'>Price: {price}</p>
                    <p className='text-left'>Provider Name: {providerName}</p>
                    <p className='text-left'>Provider email: {email}</p>
                    <p className='text-left'>Details: {details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Get an Appointment</button>
                    </div>
                </div>
            </div>


            {/* Reviews............. */}
            <div className='my-32'>
                <h2 className='text-4xl my-10'>Reviews</h2>

                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-32'>
                    {
                        reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                    }
                </div>
                <div className='md:mx-32 mt-16'>
                    {
                        user ? <form onSubmit={handleAddReview}>
                            <textarea name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Add a Review" required></textarea>
                            <input className='btn' type="submit" value="Post" />
                        </form>
                            : <div>Please <Link to="/login" className='underline text-blue-700'> login </Link> to add review</div>
                    }

                </div>


            </div>
        </div>
    );
};

export default ServiceDetails;
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const UpdateReview = () => {
    const review = useLoaderData()
    const navigate = useNavigate()
    useTitle("Update Review")
    const { _id, serviceName, reviewMsg } = review
    const handleUpdateReview = (e) => {
        e.preventDefault();
        const reviewMsg = e.target.review.value;
        console.log(reviewMsg)

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ reviewMsg })
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Update Successfull")
                    navigate("/myReview")
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='my-32 lg:mx-32'>
            <h2 className="text-5xl mb-10">Update Review</h2>
            <p className='mb-5 text-left'>Service Name : {serviceName}</p>
            <form onSubmit={handleUpdateReview}>
                <textarea name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Add a Review" defaultValue={reviewMsg} required></textarea>
                <input className='btn' type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateReview;
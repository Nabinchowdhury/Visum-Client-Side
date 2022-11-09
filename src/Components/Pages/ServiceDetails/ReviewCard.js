import React from 'react';

const ReviewCard = ({ review }) => {
    const { service_id,
        serviceName,
        reviewMsg,
        picture,
        reviewer_email,
        name } = review
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl border rounded-lg pt-3">
                <figure><div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={picture} alt='' />
                    </div>
                </div></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">Client: {name}</h2>
                    <p>Service Name: {serviceName}</p>
                    <p>Review : {reviewMsg}</p>

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
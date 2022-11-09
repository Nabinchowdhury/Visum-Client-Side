import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const { user, logUserOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
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
    }, [user?.email, logUserOut])

    const handleDeleteReview = (id) => {

        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE",
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = reviews.filter(review => review._id !== id)
                        setReviews(remaining)
                    }
                })
        }

    }





    return (
        <div>
            <div>
                <h2 className="text-5xl">My Reviews</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Name</th>
                                <th>Review</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <ReviewRow
                                    key={review._id}
                                    review={review}
                                    handleDeleteReview={handleDeleteReview}
                                ></ReviewRow>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default MyReview;
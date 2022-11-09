import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewRow from './ReviewRow';
import { RotatingLines } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';
const MyReview = () => {
    const { user, logUserOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [spinner, setSpinner] = useState(true)
    useTitle("My Review")

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-nabinchowdhury.vercel.app/reviews?email=${user?.email}`, {
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
                setSpinner(false)
            }).catch((err) => console.log(err))

    }, [user?.email, logUserOut])

    const handleDeleteReview = (id) => {

        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            fetch(`https://b6a11-service-review-server-side-nabinchowdhury.vercel.app/reviews/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('serviceReview-token')}`
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Deleted Successfully")
                        const remaining = reviews.filter(review => review._id !== id)
                        setReviews(remaining)
                    }
                })
        }

    }





    return (
        <div>
            {
                spinner ? <div className='w-20 mx-auto mt-32'>
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                </div>
                    :
                    <div>
                        {
                            reviews.length < 1 ?
                                <h2 className='my-48 text-3xl'> You have not added any review.</h2>
                                :
                                <div>
                                    <h2 className="text-5xl my-10">My Reviews</h2>
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
                        }



                    </div>

            }

        </div>
    );
};

export default MyReview;
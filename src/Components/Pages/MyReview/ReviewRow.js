import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDeleteReview }) => {
    // console.log(review)
    const { _id, serviceName, reviewMsg } = review


    return (
        <tr>
            <th></th>
            <td>{serviceName}</td>
            <td>{reviewMsg}</td>
            <td>

                <Link to={`/update/${_id}`}><button className='btn btn-primary'>Edit</button></Link>
                <button className='btn btn-error' onClick={() => { handleDeleteReview(_id) }}>delete</button></td>



        </tr>
    );
};

export default ReviewRow;
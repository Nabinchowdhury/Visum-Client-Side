import React from 'react';

const ReviewRow = ({ review, handleUpdateStatus, handleDeleteOrder }) => {
    console.log(review)
    const { _id, serviceName, reviewMsg } = review
    return (
        <tr>
            <th></th>
            <td>{serviceName}</td>
            <td>{reviewMsg}</td>
            <td>
                <button className='btn btn-info'>edit</button>
                <button className='btn btn-error'>delete</button></td>
        </tr>
    );
};

export default ReviewRow;
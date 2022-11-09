
import React, { useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='w-20 mx-auto'>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate >
    }
    return children;
};
export default PrivateRoute;
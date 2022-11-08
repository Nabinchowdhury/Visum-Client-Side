import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div >
            <form className="hero mt-20 mb-10" onSubmit={handleSubmit}>
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body bg-white">
                        <h4 className='text-black font-bold ms-2 text-xl'>Log In</h4>
                        <div className="form-control border-0 ">
                            <label className="label">
                                <span className="label-text text-lg text-black">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input w-full p-2 bg-slate-100 text-black" required />

                        </div>
                        <div className="form-control border-0">
                            <label className="label">
                                <span className="label-text text-lg text-black">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input w-full p-2 bg-slate-100 text-black" required />

                            <p className="text-right my-3 ">
                                <Link className='underline  text-yellow-400 font-medium hover:text-yellow-500'
                                > Forgot Password?</Link>
                            </p>
                        </div>
                        <p className='text-red-500 font-bold'>{error}</p>
                        <div className="form-control border-0 my-2">
                            <button className="btn btn-primary font-bold w-full">Log in</button>
                        </div>
                        <p className='text-black text-center'>Don't have an account?
                            <Link to="/signup" className='ml-1 underline text-yellow-400 font-medium hover:text-yellow-500'>Create an account</Link> </p>
                    </div>
                </div>
            </form>


            <div className='flex flex-col items-center mx-10'>

                <button className='btn btn-warning w-full sm:w-1/2 lg:w-1/3 my-2 font-medium' >Sign in with Google</button>
            </div>
        </div >

    );
};

export default Login;
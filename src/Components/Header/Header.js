import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const routeItems = <><li><Link>My Review</Link></li>
        <li><Link to="/addService">Add Service</Link></li>
        <li><Link>Blog</Link></li>
        <Link><button className='btn btn-outline btn-error rounded-lg ml-3'>Log Out</button></Link></>

    return (
        <div className="navbar bg-base-100 lg:px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {routeItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-3xl">Visum</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {routeItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login"> <button className='btn btn-outline btn-warning rounded-lg'>Login</button></Link>
            </div>
        </div>
    );
};

export default Header;
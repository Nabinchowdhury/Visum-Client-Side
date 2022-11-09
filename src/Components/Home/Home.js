import React, { useEffect, useState } from 'react';
import "./Home.css"
import 'react-photo-view/dist/react-photo-view.css';
import img1 from "../images/family-1.jpg"
import img2 from "../images/fashion-agency-1.jpg"
import img3 from "../images/fashion-agency-5.jpg"
import img4 from "../images/family-2.jpg"
import img5 from "../images/fashion-agency-3.jpg"
import img6 from "../images/car-6.jpg"
import img7 from "../images/family-4.jpg"
import img8 from "../images/family-1.jpg"
import img9 from "../images/family-3.jpg"
import img10 from "../images/car-7.jpg"
import img11 from "../images/car-8.jpg"
import img12 from "../images/car-9.jpg"
import img13 from "../images/fashion-agency-1.jpg"
import img14 from "../images/fashion-agency-6.jpg"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ServiceCard from '../Shared/ServiceCard';
import { Link } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
const Home = () => {
    const images = [img1, img5, img11, img4, img2, img6, img7, img10, img3, img12, img13, img4, img9, img14]

    const [services, setServices] = useState([]);
    const [limit, setLimit] = useState(3)
    useTitle("Home")
    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-nabinchowdhury.vercel.app/services?limit=${limit}`).then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [limit])
    return (
        <div>

            {/* Banner........... */}
            <div className="relative w-full my-10">
                <div className='banner '>
                    <img src="https://fourstudio.in/img/photography.jpg" alt="" className='rounded-2xl' />
                </div>
                <div className="absolute flex justify-end  left-10 md:left-32 top-1/4">
                    <div>
                        <p>Personal Photographer</p>

                        <h1 className='text-lg md:text-4xl font-bold text-white mt-2 md:mt-5'>
                            THOMAS FRANTZ
                        </h1>
                    </div>
                </div>
            </div>

            {/* Services Card......... */}
            <div className='my-32'>
                <h2 className='text-4xl my-10'>Services</h2>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-32'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <Link to="/services" > <button className='btn btn-warning my-10 rounded-lg'>See All Services</button></Link>
            </div>


            {/* Extra section 1............... */}
            <div>
                <div className='my-10 font-serif'>
                    <p>My Latest Works</p>
                    <h2 className='text-4xl my-5'>PORTFOLIO</h2>
                    <p>Check out my latest work and make sure I love it, and totally dedicated to the work of a photographer.</p>
                </div>
                <PhotoProvider>
                    <div className=" grid 
                    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-32">
                        {images.map((item, index) => (
                            <PhotoView key={index} src={item}>
                                <img src={item} alt="" className='' />
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
            </div>

            {/* Extra section 2.......... */}
            <div className='my-32'>
                <h2 className='text-4xl my-10'>About</h2>
                <div className="card lg:card-side bg-base-100 shadow-xl md:mx-32">
                    <figure><img src={img4} alt="Album" className=' w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">I've been providing</h2>
                        <h2 className="card-title text-2xl">customers great services</h2>
                        <p className='text-left lg:mt-10'>I'm Thomas Frantz, your newest friend, the man behind the camera and a professional third wheeler. I am so happy you have found yourself here on my site! I'm a photographer. My heart and soul come alive when I photograph the beauty of human connection in its truest, rawest form.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
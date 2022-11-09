import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {

    useTitle("Add Title")
    const email = "thomas@frantz.com"

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const serviceName = form.serviceName.value
        const photo = form.photoURL.value;
        const price = form.price.value
        const details = form.details.value;

        const service = {

            serviceName,
            price,
            photo,
            details,
            providerName: name,
            email,
            date: new Date()
        }

        fetch(`http://localhost:5000/addService`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully added');
                    form.reset()
                }
            }).catch(err => console.log(err))
    }

    return (
        <div className='my-20 md:mx-32'>
            <h2 className='text-4xl my-10'>Add a Service</h2>
            <form onSubmit={handleAddService}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="name" type="text" placeholder="Your Name" className="input input-ghost w-full  input-bordered lg:col-span-2" required />

                    <input name="serviceName" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered" required />

                    <input name="photoURL" type="text" placeholder="Photo URL" className="input input-ghost w-full  input-bordered" required />

                    <input name='price' type="text" placeholder='Price' className="input input-ghost w-full  input-bordered" required />

                    <input name="email" type="text" placeholder="Your email" className="input input-ghost w-full input-bordered " defaultValue={email} readOnly />
                </div>

                <textarea name="details" className="textarea textarea-bordered h-24 w-full" placeholder="Service Details" required></textarea>

                <input className='btn' type="submit" value="Add Your Service" />
            </form>
        </div>
    );
};

export default AddService;
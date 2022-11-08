import React from 'react';

const AddService = () => {
    const currentdate = new Date()
    console.log(currentdate)
    const email = "thomas@frantz.com"

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const serviceName = form.serviceName.value
        const photo = form.photoURL.value;
        const price = form.price.value
        const details = form.details.value;

        const order = {

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
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert(" Successfull")
                    form.reset()
                }
            }).catch(err => console.log(err))
    }

    return (
        <div>
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
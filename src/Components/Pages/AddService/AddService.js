import React from 'react';

const AddService = () => {
    const currentdate = new Date()
    console.log(currentdate)
    const handleAddService = () => {

    }

    return (
        <div>
            <form onSubmit={handleAddService}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="ServiceName" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered" />
                    <input name="photoURL" type="text" placeholder="Photo URL" className="input input-ghost w-full  input-bordered" />
                    <input name="price" type="text" placeholder="Price" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="etails" className="textarea textarea-bordered h-24 w-full" placeholder="Service Details" required></textarea>

                <input className='btn' type="submit" value="Add Your Service" />
            </form>
        </div>
    );
};

export default AddService;
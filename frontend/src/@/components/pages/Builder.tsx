import React, { useState } from 'react';
import { Button } from '../button';
import { Input } from '../input';
export default function Builder() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        education: [],
        experience: [],
        skills: [],
        social: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Send this data to the server
    };

    return (
       <main className='mx-auto w-full md:max-w-screen-xl  min-h-screen'>
         <form onSubmit={handleSubmit}>
            <div className='flex flex-col p-12 space-y-7'>


            <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <Input
            type='email'
            name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                />
            <Input
                type="text"
                name="social"
                value={formData.social}
                onChange={handleChange}
                placeholder="Social Links (separate with commas)"
            />
            <Button type="submit">Submit</Button>
                </div>
        </form>
       </main>
    );
}

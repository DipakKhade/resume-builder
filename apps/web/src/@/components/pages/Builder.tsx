import { useState } from 'react';
import { Button } from '../button';
import { Input } from '../input';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Builder() {
    const navigate = useNavigate();

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

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData); 
     const req=  await axios.post('http://localhost:3000/generate-resume',
    {
data:formData
    },
    {
        headers: {
          'Content-Type': 'application/json'
        }
      }
        )

        console.log(req.data.status)
        console.log(req.data.fileName)

        // const pdfPath=`D:/Playgorund/resume-builder/apps/backend/documents/${req.data.fileName}`
        // navigate(`http://localhost:5173/${pdfPath}`)

        window.location.assign(`http://localhost:3000/getresume/?pdfname=${req.data.fileName}`)

        
    };
    return (
        <>
        <main className='mx-auto w-full md:max-w-screen-xl min-h-screen'>
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
                    {/* Education input */}
                    <div>
                        <label htmlFor="education">Education</label>
                        <Input
                            type='text'
                            id='education'
                            name='education'
                            value={formData.education} // This will be an array, so you might need to handle it differently
                            onChange={handleChange}
                            placeholder="Education (separate with commas)"
                            />
                    </div>
                    <div>
                        <label htmlFor="experience">experience</label>
                        <Input
                            type='text'
                            id='experience'
                            name='experience'
                            value={formData.experience} // This will be an array, so you might need to handle it differently
                            onChange={handleChange}
                            placeholder="experience (separate with commas)"
                        />
                    </div>

                    <div>
                        <label htmlFor="skills">Skills</label>
                        <Input
                            type='text'
                            id='skills'
                            name='skills'
                            value={formData.skills} // This will be an array, so you might need to handle it differently
                            onChange={handleChange}
                            placeholder="skills (separate with commas)"
                            />
                    </div>

<div>

<label htmlFor="socials">socials</label>
                    <Input
                        type="text"
                        name="social"
                        value={formData.social}
                        onChange={handleChange}
                        placeholder="Social Links (separate with commas)"
                        />

                        </div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </main>
                        </>
    );
}

"use client";
import { useState } from "react";
import { Button } from "../button";
import { Input } from "../input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../dialog"
  
import { Label } from "../label"

export default function Builder() {
  const navigate = useNavigate();
const [submited,setSubmitted]=useState<boolean>(false)
const [fileName, setFileName]=useState<string>('')
const [pdfLink ,setpdfLink]=useState<string>('')

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: [],
    experience: [],
    skills: [],
    social: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const req = await axios.post(
      "http://localhost:3000/generate-resume",
      {
        data: formData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
   if(req.data.status==="success"){
    setSubmitted(true)
    setFileName(req.data.fileName)
   }
   console.log(req.data.status)
    console.log(req.data.fileName);

    // const pdfPath=`D:/Playgorund/resume-builder/apps/backend/documents/${req.data.fileName}`
    // navigate(`http://localhost:5173/${pdfPath}`)

    // window.location.assign(`http://localhost:3000/getresume/?pdfname=${req.data.fileName}`)
  };

  const downloadPdf = async () => {
    try {
        const response = await axios({
            url: `http://localhost:3000/download?fileName=${fileName}`, // The Express server URL
            method: 'GET',
            responseType: 'blob', // Important
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        setpdfLink(link.href)
        link.setAttribute('download', fileName); // Name of the file
        document.body.appendChild(link);
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
    } catch (error) {
        console.error('Error downloading the file', error);
    }

  }

  return (
    <>
      <main className="mx-auto w-full md:max-w-screen-xl min-h-screen">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col p-12 space-y-7">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {/* Education input */}
            <div>
              <label htmlFor="education">Education</label>
              <Input
                type="text"
                id="education"
                name="education"
                value={formData.education} // This will be an array, so you might need to handle it differently
                onChange={handleChange}
                placeholder="Education (separate with commas)"
              />
            </div>
            <div>
              <label htmlFor="experience">experience</label>
              <Input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience} // This will be an array, so you might need to handle it differently
                onChange={handleChange}
                placeholder="experience (separate with commas)"
              />
            </div>

            <div>
              <label htmlFor="skills">Skills</label>
              <Input
                type="text"
                id="skills"
                name="skills"
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


           <Dialog>
      <DialogTrigger asChild>
            <Button variant="outline" type="submit">Submit</Button>
      </DialogTrigger>

      {
        submited ?   <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Label htmlFor="name" className="text-right">
            file name :  {fileName}
            </Label>
         
          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit" onClick={()=>navigate(pdfLink)}>see your pdf</Button>
          <Button onClick={downloadPdf}>download</Button>
        </DialogFooter>
      </DialogContent>  :''
      }
     
    </Dialog> 
          </div>
        </form>
      </main>
    </>
  );
}

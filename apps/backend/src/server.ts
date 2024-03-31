import express, { Express, Request, Response } from 'express';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import cors from 'cors'

const PORT: number = 3000;
const app: Express = express();
app.use(express.json());
app.use(cors())

app.get('/', function (req: Request, res: Response) {
    res.send('hi');
});

app.post('/generate-resume', async function (req: Request, res: Response) {
    let { name, email, education, experience, skills, social } = req.body.data;

    education=education.split(',')
    experience=experience.split(',')
    social=social.split(',')
    skills=skills.split(',')
    

    console.log(experience)

    // console.log(req.body)
    

    try {
        const doc = new PDFDocument();
    doc.font('Helvetica');

    if (name) {
        doc.text(`Name: ${name}`);
        doc.moveDown(0.5);
    }
    if (email) {
        doc.text(`Email: ${email}`);
        doc.moveDown(0.5);
    }
  
    if (education && education?.length > 0) {
        doc.font('Helvetica-Bold').text('Education:');
        education.forEach((edu: any) => {
            doc.font('Helvetica').text(`- ${edu.degree} in ${edu.major} from ${edu.university}, ${edu.year}`);
        });
        doc.moveDown(0.5);
    }
    if (experience && experience?.length > 0) {
        doc.font('Helvetica-Bold').text('Experience:');
        experience.forEach((exp: any) => {
            doc.font('Helvetica').text(`- ${exp.title} at ${exp.company} (${exp.location}) from ${exp.startDate} to ${exp.endDate}`);
            doc.font('Helvetica').text(`  ${exp.description}`);
            doc.moveDown(0.5);
        });
    }
    if (skills && skills?.length > 0) {
        doc.font('Helvetica-Bold').text('Skills:');
        skills.forEach((skill: string) => {
            doc.font('Helvetica').text(`- ${skill}`);
        });
        doc.moveDown(0.5);
    }
    if (social && social?.length > 0) {
        doc.font('Helvetica-Bold').text('Social Links:');
        social.forEach((link: string) => {
            doc.fillColor('blue').text(`- ${link}`, { link: link }); // Make link clickable
            doc.moveDown(0.5);
        });
        doc.moveDown(0.5);
    }
    const fileName = `${Math.floor(Math.random()*10898)}.pdf`;
    const filePath = `${path.resolve()}/documents/${fileName}`;
    doc.pipe(fs.createWriteStream(filePath));
    doc.end();
    res.json({status:'success'})


    } catch (error) {
        res.json({status:'fail'})
    }
});

app.listen(PORT, () => console.log('Server is up and running at PORT 3000...'));

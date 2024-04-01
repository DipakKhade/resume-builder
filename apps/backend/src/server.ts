import express, { Express, Request, Response } from 'express';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
// import userSchema from '@repo/packages/typescript-config/zodtypes'


const PORT: number = 3000;
const app: Express = express();
const jwtsecrete:string='yyqoiomnzytebaopj'

app.use(express.json());
app.use(cors(
    {
        credentials:true,
        origin:"http://localhost:5173"
    }
))
app.use(cookieParser())

app.get('/', function (req: Request, res: Response) {
    res.send('you are a / endpoint of server');
});



app.post('/signup',function(req:Request,res:Response){
    const token=jwt.sign(req.body,jwtsecrete)
  res.cookie('token',token)

  res.send('log in success')
})


app.get('/login',function(req:Request,res:Response){
    const token=req.cookies.token

    // const verifytoken=jwt.verify(token,jwtsecrete)

    console.log('dipak',token)
})


app.post('/generate-resume', async function (req: Request, res: Response) {
    let { name, email, education, experience, skills, social } =await req.body.data;

    education=education.split(',')
    experience=experience.split(',')
    social=social.split(',')
    skills=skills.split(',')
    
   
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
    res.json({
        status:'success',
        fileName
    })


  
});


app.get('/getresume',function(req:Request,res:Response){
    const {pdfname}=req.query;
    console.log(req.query)

    const resumepath=`${path.resolve()}\${req.query.pdfname}`

console.log(resumepath)
    if (fs.existsSync(resumepath)) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename=${pdfname}`);

        const stream = fs.createReadStream(resumepath);
        stream.pipe(res);
    } 
})

app.listen(PORT, () => console.log('Server is up and running at PORT 3000...'));

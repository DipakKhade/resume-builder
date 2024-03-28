import express , {Express,Request,Response} from 'express'

const PORT:number = 3000
const app:Express=express();

app.listen(PORT,()=>console.log('server is up and running at PORT 3000 ... '))
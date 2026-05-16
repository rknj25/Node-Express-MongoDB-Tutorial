import express from 'express';
import dbconnect from './config/db.js';
import authRouter from './router/authRouter.js';
const port=9999;

const app=express();
dbconnect();
app.use(express.json());


app.use('/api/user',authRouter)


app.listen(port,()=>{
    console.log("server started at:- ",port);
    
})
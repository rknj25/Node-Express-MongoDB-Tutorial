import express from 'express';
import dbconnect from './config/db.js';
const port=9999;

const app=express();
dbconnect();

app.listen(port,()=>{
    console.log("server started at:- ",port);
    
})
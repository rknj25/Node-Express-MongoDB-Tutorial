const express =require('express');
const port=9999;
const app=express();


app.listen(port,()=>{
    console.log("server started at:- ",port);
    
})
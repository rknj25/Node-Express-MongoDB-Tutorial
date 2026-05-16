// import { text } from "express";
import user from "../model/user.js";
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const secretKey="123";
// const url= 'http://localhost:5000/api/user' 
const url='http://localhost:9999/api/user';

const userRegister=async(req,res)=>{
    try{
        const {username,lastname,email,phone,password}=req.body;
        const extUser=await user.findOne({email})
        if(extUser){
            return res.json({error:"email already in use"})
        }
        await user.create({
            username,
            lastname,
            email,
            phone,
            password
        })
        return res.json({message:"user added.."})
    }
    catch{
        return res.json({error:"user not added.."})
    }
}

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;

        const extUsr=await user.findOne({email})
        if(!extUsr){
            return res.json({message:"email not register"})
        }
        
        if(extUsr.password  !==password){
            return res.json({message:"Password not match"})
        }
        return res.json({message:"Login Successfully.."})
    }
    catch{
        return res.json({message:"User not Exits"})
    }
}

const forgotPassword=async(req,res)=>{
    try{
        const {email}=req.body;

        const extEmail=await user.findOne({email})
        if(!extEmail){
            return res.json({message:"Email not Found"})
        }
        const token=jwt.sign({email},secretKey,{expiresIn:"1h"});
        const transporter=nodemailer.createTransport({
            service:"gmail",
            secure:true,
            auth:{
                user:"rkano2009@gmail.com",
                pass:"bcbr aixj tnih nlpa"
            },
        });

        const receiver={
            from:"rupesh.kanojia@marwadiuniversity.edu.in",
            to:email,
            subject:"Password Reset Request",
            // text:`click on link ${url}/resetpassword${token}`,
            text:`Click on link ${url}/resetpassword/${token}`,

        }
        await transporter.sendMail(receiver);
        return res.json({message:"password reset link send"})
    }
    catch(error){
    return res.json({message:error.message})
}
}

const changePass=async(req,res)=>{
    try{
        const {email,currentPass,newPass}=req.body;

        const extUsr=await user.findOne({email});
        if(!extUsr){
            return res.json({message:"user not exist."})
        }
        if(extUsr.password !== currentPass){
    return res.json({message:"Current password not match"})
}

        await user.updateOne({email},{password:newPass})
        return res.json({message:"password updated"})
    }
    catch(error){
    return res.json({message:"not posible"})
}

}
export  {userRegister,login,forgotPassword,changePass};
// export default login;
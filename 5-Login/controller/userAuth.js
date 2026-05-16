import user from "../model/user.js";

const userRegister=async(req,res)=>{
    try{
        const {username,lastname,email,phone,password}=req.body;
        const extUser=await user.findOne({email})
        if(extUser){
            return res.json({error:"email already in use"})
        }
        user.create({
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

export  {userRegister,login};
// export default login;
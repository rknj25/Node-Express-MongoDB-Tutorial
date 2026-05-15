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

export default userRegister;
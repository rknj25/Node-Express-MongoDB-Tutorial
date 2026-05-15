import mongoose from "mongoose";

const dbconnect=async()=>{
    try{
        await mongoose.connect("mongodb+srv://Rupesh_knj:Prisha1612@node.lhpeyea.mongodb.net/studentDB?retryWrites=true&w=majority&appName=NodeTutorial")
        console.log("database connected successfully...");
        
    }
    catch{
        console.log("database not connected..");
        
    }
}

export default dbconnect;
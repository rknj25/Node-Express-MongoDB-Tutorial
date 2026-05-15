const express=require('express');
const app=express()
const port=9999;
const notes=require('./data/note.js')
app.use(express.json())


//Get Data from Json File

app.get('/data',(req,res)=>{
    return res.json({notes})
})


//Get Particular Data from Json file with the help of Find()

app.get('/data/:id',(req,res)=>{
    const id=req.params.id;

    const pd=notes.find((n)=>n._id===id)
    return res.json({pd})
})

//Add Data into Json File

app.post('/add',(req,res)=>{
    const newData={
        _id:String(notes.length+1),
        title:req.body.title,
        content:req.body.content,
        category:req.body.category
    }
    notes.push(newData)
    return res.json({notes})
})

//Update Particular data in Json File with Find()

app.put('/update/:id',(req,res)=>{
    const id=req.params.id

    const ud=notes.find((n)=>n._id===id)

    
    ud.title=req.body.title;
    ud.content=req.body.content;
    ud.category=req.body.category;

    return res.json({notes})
})

//Delete Data From Json File with findIndex()

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id

    const dd=notes.findIndex((n)=>n._id===id)

    notes.pop(dd)
    return res.json({notes})

})

app.listen(port,()=>{
    console.log("Server started at:- ",port);
    
})
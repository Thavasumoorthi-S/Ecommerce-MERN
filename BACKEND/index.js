const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyparser=require('body-parser');
const itemmodel=require('./model/itemmodel')
const usermodel=require('./model/usermodel')

const app=express();
app.use(cors())
app.use(bodyparser.json({extended:true,limit:'50mb'}))



mongoose.connect('mongodb://127.0.0.1:27017/Ecommercedemo').then(()=>{
    console.log("mongoose Connected successfully")
}).catch(err=>{
    console.log(err)
})



app.post('/setuser',(req,res)=>{
    usermodel.create(req.body).then(user=>{
        res.json(user)
    }).catch(err=>{
        res.json(err)
    })
})

app.post('/checkuser',(req,res)=>{
    const {email,password}=req.body
    usermodel.findOne({email:email}).then(user=>{
       res.json(user)
    }).catch(err=>{
        res.json(err)
    })
})


app.post('/setitem',(req,res)=>{
   const {useremail}=req.query;
   const {id,price,brand,size,img,amount,type}=req.body;
    itemmodel.create({id:id,price:price,brand:brand,size:size,img:img,type:type,useremail:useremail}).then(item=>{
        res.json(item)
    }).catch(err=>{
        res.json(err)
    })
})


app.get('/getitem',(req,res)=>{
    const {useremail}=req.query
    itemmodel.find({useremail:useremail}).then(item=>{
        res.json(item)
    }).catch(err=>{
        res.json(err)
    })
})


app.delete('/deleteitem',(req,res)=>{
    const {useremail,it}=req.query;
    itemmodel.deleteOne({useremail:useremail,id:it}).then(item=>{
        res.json(item)
    }).catch(err=>{
        res.json(err)
    })
})


app.listen(8000,()=>{
    console.log("server is running on port 8000")
})

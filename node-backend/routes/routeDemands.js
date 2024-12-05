const express=require('express')
const route=express.Router()
const demandModel=require('../models/demand.model')
const jwt=require('jsonwebtoken')
const multer = require('multer');
const nodemailer = require('nodemailer');


var privatekey="#hellofromjjjj#"
verifyToken=(req,res,next)=>{
    tokenn=req.headers.authorization
    if(!tokenn){
        res.status(400).send('u have to send token')
    }else{
        jwt.verify(tokenn,privatekey, (err,decoded) => {
            if (err) {
              res.status(400).send('Invalid or expired token:');
            } else {
              console.log(decoded)  
              next()
            }
         });
    }
}

route.get('/',(req,res)=>{
    demandModel.testConnection().then((msg)=>res.send(msg)).catch((err)=>res.send(err))
})


const storage = multer.memoryStorage(); // Store files in memory as Buffer
const upload = multer({ storage });
route.post('/uploaddemand', upload.single('cv'), (req, res) => {
    const demandData = {
      jobTitle: req.body.jobtitle,
      jobDesc: req.body.jobdesc,
      reqSkills: req.body.reqskills,
      experience: parseInt(req.body.exper, 10),
      education: req.body.educ,
      salary: parseFloat(req.body.slary),
      email:req.body.email,
      file: req.file
        ? {
            filename: req.file.originalname,
            data: req.file.buffer,
            contentType: req.file.mimetype,
          }
        : null,
    };
  
    demandModel.saveDemand(demandData)
      .then((savedDemand) => {
        res.status(200).json({ message: 'Demand and file uploaded successfully', data: savedDemand });
      })
      .catch((error) => {
        console.error('Error saving demand:', error);
        res.status(500).json({ message: 'Error uploading file and saving demand', error });
      });
  });



route.get('/alldemands',verifyToken,(req,res)=>{
    demandModel.selectAllNotAccepted().then((data)=>res.json(data)).catch((err)=>res.send(err))
})

//,verifyToken
route.put('/updatedemand/:id',(req,res)=>{
    demandModel.accepteone(req.params.id).then((data)=>res.send(data)).catch((err)=>res.send(err))
})

/*route.put('/updateallstudent/:firstname',(req,res)=>{
    studentModel.updatmanyy(req.body,req.params.firstname).then((data)=>res.send(data)).catch((err)=>res.send(err))
})*/

route.delete('/deletedemand/:id',verifyToken,(req,res)=>{
    demandModel.deleteone(req.params.id).then((data)=>res.json(data)).catch((err)=>res.send(err))
})

/*route.delete('/deleteallstudent/:firstname',(req,res)=>{
    studentModel.deletemanyy(req.params.firstname).then((data)=>res.send(data)).catch((err)=>res.send(err))
})*/





/*
students=[
    {id:1,name:'ayoub'},
    {id:2,name:'adem'},
    {id:3,name:'amin'}
]
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


route.get('/',(req,res,next)=>{
    ch=''
    students.forEach(element => {
        ch+=`<h1>name : ${element.name}</h1>`
    });
    res.send(ch)
})

route.get('/:idd',(req,res)=>{
    students.forEach(element => {
        if (req.params.idd==element.id){
            res.send(element.name)
        }
    });
    res.send("nope")
    newarr=students.filter(element => element.id==req.params.idd)
    res.send(newarr[0])
})

route.delete('/:idd',(req,res)=>{
    students.forEach(element => {
        if (req.params.idd==element.id){
            students.remove(element)
        }
    })
    res.send(students)
})

route.post('/add',(req,res)=>{
    obj=req.body
    students.push(obj)
    res.send(students)
})

route.put('/update',(req,res)=>{
        students.forEach(element => {
            if (req.body.id==element.id){
                element.name=req.body.name
            }
        });
        res.send(students)
})*/

module.exports=route
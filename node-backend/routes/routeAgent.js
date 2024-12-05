const express=require('express')
const route=express.Router()
const agentModel=require('../models/agent.model')

route.post('/register',(req,res)=>{
    agentModel.register(req.body).then((doc)=>res.status(200).json(doc)).catch(err=>res.status(400).send(err))
})

route.post('/login',(req,res)=>{
    agentModel.login(req.body).then((token)=>res.status(200).send(token)).catch(err=>res.status(400).send(err))
})















module.exports=route
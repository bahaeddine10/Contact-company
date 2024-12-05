const express=require('express')
const app=express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))




const demandRout=require('./routes/routeDemands')
app.use('/',demandRout)

const agentRout=require('./routes/routeAgent')
app.use('/agent',agentRout)







app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
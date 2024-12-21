const express=require('express')
const app=express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))
const cors = require('cors');
app.use(cors());




const demandRout=require('./routes/routeDemands')
app.use('/',demandRout)

const agentRout=require('./routes/routeAgent')
app.use('/agent',agentRout)

const projectRout=require('./routes/routeProject')
app.use('/project',projectRout)







app.listen(3002, () => {
    console.log('Server is running on port 3000');
});
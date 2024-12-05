const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const userShecma=mongoose.Schema({
    email:String,
    password:String
})

var User=mongoose.model('agent',userShecma)
url='mongodb://localhost:27017/contactdb'

exports.register=(obj)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            User.findOne({email:obj.email})
            .then((doc)=>{
                if(doc){
                    mongoose.disconnect()
                    reject("user already exist")
                }else{
                    bcrypt.hash(obj.password,10)
                    .then((pasw)=>{
                        const newUser=new User({
                            email:obj.email,
                            password:pasw
                        })
                        newUser.save().then((doc)=>{
                            mongoose.disconnect()
                            resolve(doc)
                        }).catch((err)=>reject(err))

                    }).catch((err)=>reject(err))
                }
            }).catch((err)=>reject(err))
        })
    })
}

var privatekey="#hellofromjjjj#"
exports.login=(obj)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            User.findOne({email:obj.email})
            .then((doc)=>{
                if(!doc){
                    mongoose.disconnect()
                    reject("user doesn't exist")
                }else{
                    bcrypt.compare(obj.password,doc.password)
                    .then((same)=>{
                        if(!same){
                            mongoose.disconnect()
                            reject("password wrong")
                        }else{
                            let token=jwt.sign({id:doc._id},privatekey,{
                                expiresIn:'1h'
                            })
                            mongoose.disconnect()
                            resolve(token)
                        }
                    }).catch((err)=>reject(err))
                }
            }).catch((err)=>reject(err))
        })
    })
}
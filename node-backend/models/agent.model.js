const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const userShecma=mongoose.Schema({
    email:String,
    password:String
})

const User=mongoose.model('agent',userShecma)
const url = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/contactdb'

exports.User = User;

exports.ensureDefaultAdmin = async () => {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@contact.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';

    try {
        await mongoose.connect(url);
        const existing = await User.findOne({ email: adminEmail });

        if (!existing) {
            const hashed = await bcrypt.hash(adminPassword, 10);
            const admin = new User({ email: adminEmail, password: hashed });
            await admin.save();
            console.log(`Default admin created: ${adminEmail}`);
        } else {
            console.log(`Default admin already exists: ${adminEmail}`);
        }

        await mongoose.disconnect();
    } catch (error) {
        console.error('Default admin bootstrapping failed:', error.message);
        throw error;
    }
};

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
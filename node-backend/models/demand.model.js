const mongoose = require('mongoose');
var nodemailer = require('nodemailer');
const demandSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    jobDesc: { type: String, required: true },
    reqSkills: { type: String, required: true },
    experience: { type: Number, required: true },
    education: { type: String, required: true },
    salary: { type: Number, required: true },
    accepted: { type: Boolean, default: false },
    email: { type: String, required: true },
    file: {
        filename: { type: String, required: true },
        data: { type: Buffer, required: true },
        contentType: { type: String, required: true },
    },
  });
  
  var url='mongodb://localhost:27017/contactdb'
  // Create the Demand model
  const Demand = mongoose.model('Demand', demandSchema);
  
  const testConnection=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(()=>{
            mongoose.disconnect()
            resolve('connected !')
        })
        .catch(err=>reject(err))
        
    })
}

const selectAllNotAccepted = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url)
            .then(async () => {
                try {
                    // Modify the query to filter demands where 'consulted' is false
                    const data = await Demand.find({ accepted: false });
                    resolve(data);
                    mongoose.disconnect();
                } catch (err) {
                    reject(err);
                }
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const selectAllAccepted = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url)
            .then(async () => {
                try {
                    // Modify the query to filter demands where 'consulted' is false
                    const data = await Demand.find({ accepted: true });
                    resolve(data);
                    mongoose.disconnect();
                } catch (err) {
                    reject(err);
                }
            })
            .catch((err) => {
                reject(err);
            });
    });
};

demandSchema.statics.getFileByName = async function (filename) {
    return this.findOne({ 'file.filename': filename }, 'file').exec(); // Only return the `file` field
};

  // Function to save a new Demand
  const saveDemand=async (demandData)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(async ()=>{
            try {
                const newDemand = new Demand(demandData);
                const savedDemand = await newDemand.save();
                resolve(savedDemand); // Resolve with saved data
            }catch (error) {
                reject(error); // Reject with error
            }
        }).catch((err)=>{reject(err)})
    })
}

const deleteone=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(()=>{
            Demand.findOneAndDelete({_id:id})
            .then((deletedDemand) => {
                if (!deletedDemand) {
                    reject('demand not found');
                }
                resolve(deletedDemand)
                mongoose.disconnect()
            }).catch((err) => reject(err))
        })
        .catch((err)=>{reject(err)})
    })
}

const accepteone=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(()=>{
            Demand.findOneAndUpdate({_id:id},{accepted : true},{ new: true })
            .then(async (updatedDemand) => {
                if (!updatedDemand) {
                    reject('demand not found');
                }
               // Send an email to the employee
               const transporter = nodemailer.createTransport({
                service: 'gmail', // Use your preferred email service
                auth: {
                    user: 'abassiadem321@gmail.com', // Your email
                    pass: 'pyld mpmz zzyo krbh'   // Your email password
                }
               });

               const mailOptions = {
                    from: 'abassiadem321@gmail.com', // Sender's email
                    to: updatedDemand.email,      // Employee's email
                    subject: 'Job Application Accepted',
                    text: `Dear Employee,\n\nYour application for the position "${updatedDemand.jobTitle}" has been accepted.\n\nBest regards,\nYour Company`
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                      console.error(error);
                      res.status(500).send('Error sending email');
                    } else {
                      console.log('Email Sent: ' + info.response);
                      res.redirect('/');
                    }
                  });
                resolve(updatedDemand);
            })
            .catch((err) => reject(err))
        })
        .catch((err)=>{reject(err)})
    })
}
  
  module.exports = {
    Demand,
    saveDemand,
    testConnection,
    selectAllNotAccepted,
    deleteone,
    accepteone,
    selectAllAccepted
  };

/*
let schemaStu=mongoose.Schema({
    firstname:String,
    email:String
})
var Student=mongoose.model('student',schemaStu)


var url='mongodb://localhost:27017/logicuniversity'
exports.testConnection=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(()=>{
            mongoose.disconnect()
            resolve('connected !')
        })
        .catch(err=>reject(err))
        
    })
}

const saveDemand=async (demandData)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(async ()=>{
            try {
                const newDemand = new Demand(demandData);
                const savedDemand = await newDemand.save();
                return Promise.resolve(savedDemand); // Resolve with saved data
            }catch (error) {
                return Promise.reject(error); // Reject with error
            }
        }).catch((err)=>{reject(err)})
    })
}

exports.updateone=(obj,id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(()=>{
            Student.findOneAndUpdate({_id:id},obj,{ new: true })
            .then((updatedStudent) => {
                if (!updatedStudent) {
                    reject('Student not found');
                }
                resolve(updatedStudent);
            })
            .catch((err) => reject(err))
        })
        .catch((err)=>{reject(err)})
    })
}

exports.updatmanyy=(obj,firstnames)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(()=>{
            Student.updateMany({firstname:firstnames},obj,{new:true}).then((docs)=>{
                mongoose.disconnect()
                resolve(docs)
            }).catch((err)=>{reject(err)})
        })
        .catch((err)=>{reject(err)})
    })
}


exports.deleteone=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(()=>{
            Student.findOneAndDelete({_id:id})
            .then((deletedStudent) => {
                if (!deletedStudent) {
                    reject('Student not found');
                }
                resolve(deletedStudent)
                mongoose.disconnect()
            }).catch((err) => reject(err))
        })
        .catch((err)=>{reject(err)})
    })
}

exports.deletemanyy=(firstnames)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(()=>{
            Student.deleteMany({firstname:firstnames}).then((docs)=>{
                mongoose.disconnect()
                resolve(docs)
            }).catch((err)=>{reject(err)})
        })
        .catch((err)=>{reject(err)})
    })
}

exports.selectone=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(async ()=>{
            try{
                data=await Student.find({_id:id})
                resolve(data)
                mongoose.disconnect()
            }catch(err){reject(err)}

        })
        .catch((err)=>{reject(err)})
    })
}

exports.selectall=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
        .then(async ()=>{
            try{
                data=await Student.find({})
                resolve(data)
                mongoose.disconnect()
            }catch(err){reject(err)}

        })
        .catch((err)=>{reject(err)})
    })
}*/

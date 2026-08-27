const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

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

// Create the Demand model
const Demand = mongoose.model('Demand', demandSchema);

const testConnection = () => {
    return Promise.resolve('connected !');
};

const selectAllNotAccepted = () => {
    return Demand.find({ accepted: false });
};

const selectAllAccepted = () => {
    return Demand.find({ accepted: true });
};

demandSchema.statics.getFileByName = async function (filename) {
    return this.findOne({ 'file.filename': filename }, 'file').exec();
};

const saveDemand = (demandData) => {
    const newDemand = new Demand(demandData);
    return newDemand.save();
};

const deleteone = (id) => {
    return new Promise((resolve, reject) => {
        Demand.findOneAndDelete({ _id: id })
            .then((deletedDemand) => {
                if (!deletedDemand) {
                    return reject('demand not found');
                }
                resolve(deletedDemand);
            })
            .catch((err) => reject(err));
    });
};

const accepteone = (id) => {
    return new Promise((resolve, reject) => {
        Demand.findOneAndUpdate({ _id: id }, { accepted: true }, { new: true })
            .then(async (updatedDemand) => {
                if (!updatedDemand) {
                    return reject('demand not found');
                }

                const emailUser = process.env.EMAIL_USER;
                const emailPass = process.env.EMAIL_PASS;

                // Send email only if email configuration is provided
                if (emailUser && emailPass) {
                    try {
                        const transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: emailUser,
                                pass: emailPass
                            }
                        });

                        const mailOptions = {
                            from: emailUser,
                            to: updatedDemand.email,
                            subject: 'Job Application Accepted',
                            text: `Dear Applicant,\n\nYour application for the position "${updatedDemand.jobTitle}" has been accepted.\n\nBest regards,\nContact Company Team`
                        };

                        await transporter.sendMail(mailOptions);
                    } catch (error) {
                        console.error('Email send notification failed:', error.message);
                    }
                }

                resolve(updatedDemand);
            })
            .catch((err) => reject(err));
    });
};

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

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || '#hellofromjjjj#';

const userShecma = mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('agent', userShecma);

exports.User = User;

exports.ensureDefaultAdmin = async () => {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@contact.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';

    try {
        const existing = await User.findOne({ email: adminEmail });

        if (!existing) {
            const hashed = await bcrypt.hash(adminPassword, 10);
            const admin = new User({ email: adminEmail, password: hashed });
            await admin.save();
            console.log(`Default admin created: ${adminEmail}`);
        } else {
            console.log(`Default admin already exists: ${adminEmail}`);
        }
    } catch (error) {
        console.error('Default admin bootstrapping failed:', error.message);
        throw error;
    }
};

exports.register = (obj) => {
    return new Promise((resolve, reject) => {
        User.findOne({ email: obj.email })
            .then((doc) => {
                if (doc) {
                    reject("user already exist");
                } else {
                    bcrypt.hash(obj.password, 10)
                        .then((pasw) => {
                            const newUser = new User({
                                email: obj.email,
                                password: pasw
                            });
                            newUser.save()
                                .then((savedUser) => resolve(savedUser))
                                .catch((err) => reject(err));
                        })
                        .catch((err) => reject(err));
                }
            })
            .catch((err) => reject(err));
    });
};

exports.login = (obj) => {
    return new Promise((resolve, reject) => {
        User.findOne({ email: obj.email })
            .then((doc) => {
                if (!doc) {
                    reject("user doesn't exist");
                } else {
                    bcrypt.compare(obj.password, doc.password)
                        .then((same) => {
                            if (!same) {
                                reject("password wrong");
                            } else {
                                const token = jwt.sign({ id: doc._id }, JWT_SECRET, {
                                    expiresIn: '1h'
                                });
                                resolve(token);
                            }
                        })
                        .catch((err) => reject(err));
                }
            })
            .catch((err) => reject(err));
    });
};
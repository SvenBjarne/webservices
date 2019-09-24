const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    address: String,
    email: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
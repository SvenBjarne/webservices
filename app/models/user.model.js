const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    address: {
        
    }
    title: String,
    content: String,
    user: String,
    uuid: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
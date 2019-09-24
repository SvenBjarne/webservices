const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    user: String,
    uuid: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
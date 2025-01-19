const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonSchema = new Schema({
    name: {
        type: String,
    },
    contact: {
        type: Number,
    },
    subjects: [String],
    class: {
        type: String,
        required: true
    }
})

const Person = mongoose.model('Person ', PersonSchema);
module.exports = Person; 

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { 
        type: String,
        unique: true, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role:{
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
 });
module.exports = mongoose.model('UserModels', userSchema);
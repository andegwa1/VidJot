const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserShema = new Schema({
   name:{
       type: String,
       required: true
   },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },    
    date:{
        type: String,
        default: Date.now
    }
});

mongoose.model('users', UserShema);
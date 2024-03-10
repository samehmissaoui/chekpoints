const mongoose = require('mongoose');

const UserSchema =  mongoose.Schema({

     fullname : String,
     email: String,
     age : Number ,


}) ;

module.exports = mongoose.model('User', UserSchema);
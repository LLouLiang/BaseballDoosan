const mongoose = require('mongoose');
const config = require('../dbConfig/mongo');

// User Schema
const userSchema = mongoose.Schema({
    firstname : {
        type : String,
        require : true
    },
    lastname : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    zipcode : {
        type : String,
        require : true
    },
    USstate : {
        type : String,
        require : true
    }
});

const Users = module.exports = mongoose.model('User',userSchema);

//Insert new User object to the mongoDB
//have to follow the mongodb schema eg. const user = new User({ ... )}
module.exports.add = function(users,callback){
    users.save(callback);
}
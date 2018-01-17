const express = require('express');
const router = express.Router();
const config = require('../dbConfig/mongo');

const User = require('../Models/User');

router.post('/addUser',( req,res,next)=>{
    let user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        zipcode : req.body.zipcode,
        USstate : req.body.USstate
    });
    User.add(user,(err,event)=>{
        if(err){
            res.json({success:false,msg:"failed to create a new user",from:"server response"});
        }else{
            res.json({success:true,msg:"created an new User",from:"server response"});            
        }
    });
});
module.exports = router;
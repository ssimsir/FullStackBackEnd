"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Authentication Middleware
// Session içindeki user id ve passwordu kontrol eden middleware

const {User} = require('../models/userModel')

module.exports = async  (req, res, next)=>{

   req.user=null
   console.log(req.session)
   if(req?.session?._id){
      console.log(req.session._id)
      console.log(req.session.password)
      const user = await User.findOne({_id:req.session._id})
      console.log(user)
      if (user){
         console.log("3")
         req.user = user
      } else {
         req.session = null
      }
   }

   next()
}

/* ------------------------------------------------------- */

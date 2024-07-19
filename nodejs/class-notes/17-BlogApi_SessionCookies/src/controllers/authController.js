"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const { User } = require('../models/userModel')

const passwordEncrypt = require('../helpers/passwordEncryp')
/* ------------------------------------------------------- */
// Auth Controller :

module.exports.auth = {
   login : async (req, res) => {
      
      const {email, password} = req.body

      if (email && password) {
         
         const user = await User.findOne({email})
         if(user){
         //user OK
            if (user.password == passwordEncrypt(password)){
               //password ok

               res.send({
                  message:"Login is successfull"
               })
            } else {
               res.errorStatusCode = 401
               throw new Error ("Login parameters are not true")
            }

         }else{
            res.errorStatusCode = 401
            throw new Error ("This user no found")
         }

      } else {
         res.errorStatusCode = 401
         throw new Error ("email and password required")
      }

   },

   logout : async (req, res) => {

   },
}


/* ------------------------------------------------------- */

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
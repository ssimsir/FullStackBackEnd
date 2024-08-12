"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

{
    "userId": "65343222b67e9681f937f001",
    "token": "...tokenKey..."
  }
  /* ------------------------------------------------------- */
//Token model

const TokenSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        index:true,
        unique:true
    },
    token:{
        type:String,
        required:true,
        index:true,
        unique:true
    }

}, {
    collation:'tokens',
    timestamps:true
})

/* ------------------------------------------------------- */
module.exports = mongoose.model('Token', TokenSchema)
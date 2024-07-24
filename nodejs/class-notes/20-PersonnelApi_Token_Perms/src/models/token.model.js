"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

//Token Model:

const TokenSchema = new mongoose.Schema({

   userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Personnel',
      r
   }

}, {

   collection:'tokens',
   timestamps:true

})


/* ------------------------------------------------------- */


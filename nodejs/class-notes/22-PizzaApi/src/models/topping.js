"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
const { collection } = require('./user')
/* ------------------------------------------------------- */

const ToppingsSchema = mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true,
            unique:true
        }
    },

    {
        collection:'toppings',
        timestams:true
    }

);

module.exports = mongoose.model('Toppings', ToppingsSchema)
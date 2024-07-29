"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        requred: true,
        unique: true
    }

}, {
    collation: "user",
    timestamps: true
})
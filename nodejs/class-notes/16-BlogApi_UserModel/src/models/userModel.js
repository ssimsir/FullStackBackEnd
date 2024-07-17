"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

/* ------------------------------------------------------- */

// Password Encrypt (PBKDF2 Method):
// https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest

const crypto = require('node:crypto')

/* ------------------------------------------------------- */

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        // unique: [true, 'Email must be unique.'], // Not Supported.
        // required: true,
        required: [true, 'Email is required.'],
    },

    password: {
        type: String,
        trim: true,
        // required: true,
        required: [true, 'Password is required.'],
        set: (password) => { // Veri kaydederken, return edilen data kaydedilir.
            
        }
    },

    firstName: String,

    lastName: String,

}, {

    collection: 'users',
    timestamps: true

})

/* ------------------------------------------------------- */

// module.exports = mongoose.model('User', UserSchema) // Direct
module.exports.User = mongoose.model('User', UserSchema) // In Object
"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

/* ------------------------------------------------------- */
const passwordEncrypt = require('../helpers/passwordEncrypt')
/* ------------------------------------------------------- */
const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        // unique: [true, 'Email must be unique.'], // Not Supported.
        // required: true,
        required: [true, 'Email is required.'],
        // validate: (email) => { // Eğer return=true ise kaydeder.
        //     if (email.includes('@') && email.includes('.')) {
        //         return true
        //     } else {
        //         return false
        //     }
        // }
        // validate: (email) => (email.includes('@') && email.includes('.'))
        validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Email type is incorrect.'
        ]
        // validate: (email) => { // Eğer return=true ise kaydeder.
        //     if (email.includes('@') && email.includes('.')) {
        //         return true
        //     } else {
        //         throw new Error('Email type is incorrect: ' + email)
        //     }
        // }
    },

    password: {
        type: String,
        trim: true,
        // required: true,
        required: [true, 'Password is required.'],
        // set: (password) => passwordEncrypt(password) // Veri kaydederken, return edilen data kaydedilir.
        // set: passwordEncrypt,
        // Set methodu validate methodundan önce çalışır. Dolayısı ile validate datası her zaman aynı formattadır.
        // set: (password) => {
        //     if (password.length >= 8) {
        //         return passwordEncrypt(password)
        //     } else {
        //         return 'wrong'
        //     }
        // },
        // validate: (password) => {
        //     if (password == 'wrong') {
        //         return false
        //     } else {
        //         return true
        //     }
        // },
        set: (password) => (password.length >= 8 ?  passwordEncrypt(password) : 'wrong'),
        validate: (password) => (password != 'wrong') // Güncelleme yaparken default olarak validate çalışmaz. // { runValidators: true }

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
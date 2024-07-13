"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

//Mongose  ODM 
//$ npm i mongoose

const mongoose = require('mongoose') 

const dbConnection = () => {

   mongoose.connect(process.env?.MONGODB ||  'mongodb://localhost:27017/blogAPI')
      .then(() => console.log('* DB Connected'))
      .catch(() => console.log('* DB Notnon Connected'))
}

module.exports = dbConnection
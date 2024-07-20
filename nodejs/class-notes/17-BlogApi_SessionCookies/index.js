"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept JSON:
app.use(express.json())

// DB CONNECTION:
// const dbConnection = require('./src/dbConnection')
// dbConnection()
require('./src/dbConnection')()

// Catch error from async:
require('express-async-errors')

/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session

const session = require("cookie-session")
app.use(session({   //Genel ayarlar
    secret :  process.env.SECRET_KEY,  //cookie datası şifrelenerek saklanır
    //maxAge: 1000 * 60 * 60 *24 *3 //milisecond cinsinden  burda 3 gün belirlendi
}))

/* ------------------------------------------------------- */
// Middleware for check user data from session:
app.use(require('./src/middlewares/userControl'))


/* ------------------------------------------------------- */

app.all('/', (req, res) => {
    res.send({
        session:req.session,
        message:'WELCOME TO BLOG API',
        user:req.user,
    })
})

/* ------------------------------------------------------- */
// Routes:
app.use('/auth', require('./src/routes/authRouter')) // User Model  Login Logout
app.use('/user', require('./src/routes/userRouter')) // User Model
app.use('/blog', require('./src/routes/blogRouter')) // BlogCategory & BlogPost

/* ------------------------------------------------------- */
// Catch Errors:
app.use(require('./src/middlewares/errorHandler'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))
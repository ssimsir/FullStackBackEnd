"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
*/
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
app.use(require("./src/middlewares/logger"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
// E-MAIL:
// NodeMailer.com
// npm install nodemailer

// const nodemailer = require('nodemailer')

// Create Test Account:
// nodemailer.createTestAccount().then((data) => console.log(data))
/*
{
  user: 'awxt4bslsuo53z2h@ethereal.email',
  pass: 'snwKeGQqD6EESwr7n2',
  smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  web: 'https://ethereal.email',
  mxEnabled: false

  Name	Torrance Stokes
  Username	torrance.stokes@ethereal.email – this account can not be used for inbound emails 
  Password	EdEV9m47bPKdXtDzXC
}
*/

//Connect to MailServer / SMTP
// const transporter = nodemailer.createTransport({  //sunucuya bağlanma
//   //SMTP :
//   host:'smtp.ethereal.email',
//   port:'587',
//   secure:false,
//   auth:{
//     user:'torrance.stokes@ethereal.email',
//     pass:'EdEV9m47bPKdXtDzXC'
//   }

// }) 
// //console.log(transporter)

// //Send Mail
// transporter.sendMail({
//   //from:'torrance.stokes@ethereal.email' kullanılmayadabilir
//   to:'sadik.simsir100@gmail.com',
//   subject:'Hello',
//   text:'Hello there how are you',     
//   html:'<p><b>Hello  There</b><br>How are you</br></p>',

  
// }, function(error, success){
//   success ? console.log('SUCCESS: ', success) : console.log('ERROR : ', error)
// })

//* Gmail bağlantısı
// const transporter = nodemailer.createTransport({
//   service: 'gmail',     //populer mail servisleri için kısa tanım
//   auth:{
//     user:'sadik.simsir100@gmail.com',
//     pass:'Blk201084'  //app passwordan alınan şifre kullanılacak
//   }
// })

//* Yandex bağlantısı
// const transporter = nodemailer.createTransport({
//   service: 'yandex',     //populer mail servisleri için kısa tanım
//   auth:{
//     user:'sadik.simsir100@gmail.com',  
//     pass:'Blk201084'  //yandex kullanıcı adı ve şifre girilecek
//   }
// })

// transporter.sendMail({
//   //from:'torrance.stokes@ethereal.email' kullanılmayadabilir
//   to:'sadik.simsir100@gmail.com',
//   subject:'Hello',
//   text:'Hello there how are you',     
//   html:'<p><b>Hello  There</b><br>How are you</br></p>'
// }, function(error, success){
//   success ? console.log('SUCCESS: ', success) : console.log('ERROR : ', error)
// })

/* ------------------------------------------------------- */
// Routes:

// routes/index.js:
app.use("/", require("./src/routes/"));

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.


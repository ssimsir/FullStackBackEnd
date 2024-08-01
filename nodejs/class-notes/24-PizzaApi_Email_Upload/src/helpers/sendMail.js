"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// sendMail(to, subject, message)


const nodemailer = require('nodemailer')

module.exports = function sendMail(to, subject, message){

//* Gmail bağlantısı
const transporter = nodemailer.createTransport({
   service: 'gmail',     //populer mail servisleri için kısa tanım
   auth:{
     user:'sadik.simsir100@gmail.com',
     pass:'Blk201084'  //app passwordan alınan şifre kullanılacak
   }
 })


 transporter.sendMail({
  //from:'torrance.stokes@ethereal.email' kullanılmayadabilir
  //to:'sadik.simsir100@gmail.com',
  //subject:'Hello',
  //text:'Hello there how are you',   
  //html:'<p><b>Hello  There</b><br>How are you</br></p>'
  to:to,
  subject:subject,
  text:message,     
  html:message
}, function(error, success){
  success ? console.log('SUCCESS: ', success) : console.log('ERROR : ', error)
})




}

/*------------------------------------------------------- */


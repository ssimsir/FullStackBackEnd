"use strict"
/* -------------------------------------------------- *

* -------------------------------------------------- */

const express = require('express')
const app = express()


app.get('/',(req, res)=>{

   // const obj = {
   //    error :false,
   //    message:'welcome'
   // }
   // res.end(JSON.stringify(obj))

   //SEND METHOD
   //res.send('welcome')
   res.send({
         error :false,
         message:'welcome'
      })

})

app.post('/',(req, res)=>{
   res.end('app.post çalıştı')
})

app.put('/',(req, res)=>{
   res.end('app.put çalıştı')
})

app.delete('/',(req, res)=>{
   res.end('app.delete çalıştı')
})
//dotenv çalıştır
require('dotenv').config
const PORT = process.env.PORT || 8000


app.listen(PORT, () => console.log('Running: http://127.0.0.1:'+PORT))
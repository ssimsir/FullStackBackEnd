"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BUILTIN MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//Gelen Datayı al:
//?Gelen json datayı kabul et
app.use(express.json)

//?Gelen text datayı kabul et
app.use(express.text)

//?Gelen FORM URL ENCODED datayı kabul et
app.use(express.urlencoded)

app.all('/', (req, res) => {
   res.send({
      message: 'OK',
      params:req.params,
      query:req.query,
      headers:req.headers,
      body:req.body

   })
} )

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
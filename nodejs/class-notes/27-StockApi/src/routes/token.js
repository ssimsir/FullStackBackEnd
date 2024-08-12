"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
//routes/token

const token = require('../controllers/token')

//URL : /tokens

router.route('/')
    .get(token.list)
    .post(token.create)

router.route('/:id')
    .get(token.read)
    .put(token.create)
    .patch(token.create)
    .delete(token.delete)

/* ------------------------------------------------------- */
module.exports=router

"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
//routes/user

const user = require('../controllers/user')

//URL : /users

router.route('/')
    .get(user.list)
    .post(user.create)

router.route('/:id')
    .get(user.read)
    .put(user.create)
    .patch(user.create)
    .delete(user.delete)

/* ------------------------------------------------------- */
module.exports=router

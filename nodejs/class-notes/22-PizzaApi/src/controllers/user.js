"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const User = require('../models/user')

module.exports = {
    list:async (req, res) => {
        const data = await getModelList(User)
        res.status().send({
            error:false,
            details:await res.getModelListDetails(User)
        })
    },
    read:async (req, res) => {
        const data = await User.findOne({_id:req.params.id})
        res.status().send({
            error:false,
            details:await res.getModelListDetails(User)
        })
    },
    create:async (req, res) => {
        const data = await User.create(req.body)
        res.status().send({
            error:false,
            details:await res.getModelListDetails(User)
        })
    },
    update:async (req, res) => {
        const data = await User.updateOne({_id:req.params.id},req.body,{runValidators:true})
        res.status().send({
            error:false,
            new:await User.findOne({_id:req.params.id})
        })
    },
    delete:async (req, res) => {
        const data = await User.deleteOne({_id:req.params.id})
        res.status(data.deletedCount?204:404).send({
            error:false,
            data
        })
    },
    
}
"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department = require("../models/department.model")

module.exports = {
    list : async (req, res) => {

        const data=await res.getModelList(Department)
        const data1=Department.find({})
        res.status(200).send({
            error:false,
            data,
            detail:await res.getModelListDetails(Department)
        })
    },

    create : async (req, res) => {
        const data = Department.create(req.body)
        res.status(201).send({
            error:false,
            data            
        })
    },

    read : async (req, res) => {
        const data = await Department.findOne({ _id: req.params.id })
        res.status().send({
            error:false,
            data 
        })
    },

    update : async (req, res) => {
        const data = await Department.updateOne({ _id: req.params.id }, req.body, {runValidators:true})
        res.status(202).send({
            error:false,
            data,
            new:await Department.findOne({ _id: req.params.id })
        })
    },
    
    delete : async (req, res) => {
        data = await Department.deleteOne({_id: req.params.id})
        res.status(data.deletedCount ? 204 : 404).send({
            error:!data.deletedCount,
            data            
        })
    }
}
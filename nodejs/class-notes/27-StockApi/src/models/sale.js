"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const SaleSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    firmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm',
        required: true
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity:{
        type:Number,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    amount:{
        type:Number,
        set:function(){return this.price * this.quantity},  // data gönderilmediğinde çalşmaz
        default:function(){return this.price * this.quantity},
        transform:function(){return this.price * this.quantity},
    }

}, {
    collation: 'sale',
    timestamps: true
})

module.exports = mongoose.model('Sale', SaleSchema)
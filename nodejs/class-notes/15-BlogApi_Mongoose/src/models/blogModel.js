"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
//Mongoose 

const mongoose = require('mongoose')

//const ModelName = new mongoose.Schema({...fields}, {...settings})
const ModelName = new mongoose.Schema({

   //primary key (_id) tanımlamaya gerek yok otomatik tanımlanır
   //_id:Number
   fieldName: {
      type:Number,
      default:null,  //veri gelmediğinde yazdırılacak veri
      trim:true, //başındaki sonundaki boşlukları kırpar
      unique:true, //benzersiz kayıtlar içerir
      index:true,   // aramalarda kızlı erişim sağlar
      required:true, // veri gönderimi zorunlumu 
      required:[true, 'Bu data mutlaka girilmelidir'], // data girilmesse gösterilecek hata mesajı tanımlanabilir
      enum:[1, 2, 3],    //enum ile girilecek datalar kısıtlanır sadece arraydeki datalar girilebilir
      //enum:[['A', 'B', 'C'], 'bu değerlerden biri olmalıdır'] //bu şekildede kullanılır hata mesajı gelir
      //validate:(data) => true   //gelen datanın istenilen formatta olup olmadığının kontrolu yapılır
      validate:[
         (data) => {return true},
         'Gönderilen data formatı yanlıştır'
      ],

      get:(data) => data,  //bu veriye erişilmek istendiğinde otomatik çalışan fonksiyon
      set:(data) => data  // bu fileda veri kaydetmek istediğimizde otomatik olarak çalışan fonkson
      


   }

}, {
   collation:'tableName',   //tabloya vermek istediğim isim
   timestamps:true, //createdAt ve updatedAt otomatik yönetilsin (tanımlamaya gerek yok)
   
})




/*------------------------------------------------------- */
// Blog Model


/*------------------------------------------------------- */

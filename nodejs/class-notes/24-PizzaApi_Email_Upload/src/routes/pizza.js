"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// UPLOAD (multer middleware)
// npm i multer
// https://expressjs.com/en/resources/middleware/multer.html

const multer = require('multer')

const upload = multer({
  //dest: './uploads'
  storage:multer.diskStorage({
    destination:'./upload',
    filename: function(req, file, returnCallback){    //returnCallback işlem başarılı ile çalırşır
      //console.log('file', file)
      returnCallback(null, Date.now() +'_'+file.originalname)
    }
    

  })

})

/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require("../controllers/pizza");

// URL: /pizzas

router.route("/")
  .get(pizza.list)
  //.post(upload.single('image'), pizza.create);   //bir resim yüklenir
  .post(upload.array('image'), pizza.create);     //birden fazla resim yüklenir
  //.post(upload.any(), pizza.create);   //her türlü dosyanın yüklenmesine izinver

router
  .route("/:id")
  .get(pizza.read)
  .put(pizza.update)
  .patch(pizza.update)
  .delete(pizza.delete);

/* ------------------------------------------------------- */
module.exports = router;


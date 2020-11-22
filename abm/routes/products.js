const express = require ("express");
const router = express.Router();
const productsController = require("../controllers/productsController") 


router.get("/" , function(req,res,next){
    res.send("estamos en la pagina producto")

})

/* router.get("/create", function (req, res ,next){
    res.send ("hola")
}) */


router.get('/create', (req,res)=>{
    res.send("hola")

})

module.exports = router;

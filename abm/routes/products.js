const express = require ("express");
const router = express.Router();
const productsController = require("../controllers/productsController") 


router.get("/" , function(req,res,next){
    res.send("estamos en la pagina producto")

})

router.get("/create", productsController.create)
 
router.post("/create", productsController.createProduct)

router.get("/edit/:id", productsController.edit )

router.post("/edit/:id", productsController.actionEdit)

router.post("/delete/:id", productsController.delete)


module.exports = router;

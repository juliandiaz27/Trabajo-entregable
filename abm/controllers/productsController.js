const fs = require("fs")
const data = fs.readFileSync("./data.json",{ encoding: "utf-8"})
const dataParse = JSON.parse(data)
const productsController = {
    create : (req , res )  =>{
        res.render ("formCreate")

    },
    createProduct : (req ,res, next)=>{
        /* ------------------------------NUEVO OBJETO---------------------- */
        
        let newProduct = {
            id:  dataParse.length +1,
            nombre: req.body.nombre ,
            precio: req.body.precio,
            marca: req.body.marca,
            descripcion: req.body.descripcion ,
            stock: req.body.stock           
        }
        dataParse.push(newProduct)
        let productSave = JSON.stringify(dataParse)
        fs.writeFileSync("./data.json",productSave)
        res.send("Producto Creado")
    },

    edit: (req,res,next)=>{
       for (let i = 0; i < dataParse.length; i++) {
           if (dataParse[i].id == req.params.id) {
                return res.render("edit", {product: dataParse[req.params.id]})

           }
                      
       }return res.send("No existe este producto")
       
        
    },
    actionEdit : (req,res,next)=>{
        /* --------------------------EDITAR PRODUCTO-------------------------------- */
        let editProduct = {
            id:  req.params.id,
            nombre: req.body.nombre ,
            precio: req.body.precio,
            marca: req.body.marca,
            descripcion: req.body.descripcion ,
            stock: req.body.stock           
        }
         for (let i = 0; i < dataParse.length; i++) {
             if (editProduct.id == dataParse[i].id) {
                 
                 dataParse[i].nombre = editProduct.nombre
                 dataParse[i].precio = editProduct.precio
                 dataParse[i].marca = editProduct.marca
                 dataParse[i].descripcion = editProduct.descripcion
                 dataParse[i].stock = editProduct.stock

                let productSave = JSON.stringify(dataParse)
                fs.writeFileSync("./data.json",productSave)  
                res.render("edit",{product:dataParse[i]} )               
             }
                        
         } 
    },
    delete: (req,res,next)=>{
        /* -------------------------BORRAR PRODUCTOS------------------------------- */
        let nuevoArray = dataParse.filter(function(product){
            return product.id != req.params.id 
            

        })
                let productSave = JSON.stringify(nuevoArray)
                fs.writeFileSync("./data.json",productSave)  
                res.send("Producto eliminado") 
    }

}


module.exports = productsController 



const { addemployee } = require("../controller/productController");

const productRouter=require("express").Router();

productRouter.post("/addemployee",addemployee)
module.exports=productRouter;
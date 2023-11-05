

const { addemployee, data2, data3, data4, data5, data6, data7 } = require("../controller/productController");

const productRouter=require("express").Router();

productRouter.post("/addemployee",addemployee)
productRouter.get("/data2",data2)
productRouter.get("/data3",data3)
productRouter.get("/data4",data4)
productRouter.get("/data5",data5)
productRouter.get("/data6",data6)
productRouter.get("/data7",data7)
module.exports=productRouter;
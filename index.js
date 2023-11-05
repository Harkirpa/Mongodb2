const express=require("express");

const productRouter=require('./router/productRouter')
const PORT=4000
const app=express();

const cors = require('cors');
const { connection } = require("./config/db.js");
app.use(cors({
    origin: '*'
}));
app.use("/api",productRouter)
app.listen(PORT,async()=>{
    try{
        await connection();
        console.log('server is running on Port No. 4000')
    }
    catch(err){
           console.log('error occured during starting the live error',err)
    }
  
})
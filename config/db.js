const {MongoClient}=require("mongodb")
const url="mongodb://localhost:27017"
const mongoserver=new MongoClient(url)

const connection=async ()=>{
    try{
        await mongoserver.connect()
        console.log("Connection made successfully")
    }
    catch(err){
        console.log("error during connection",err)
    }
}
const database=mongoserver.db("Human_Resource")

module.exports={connection,database}
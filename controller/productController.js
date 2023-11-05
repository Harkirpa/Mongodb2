// const addProductStore=async(req,res) => {
//     const productDetails=req.body;
//     const data=await addProductStore.insertOne()
//     console.log(data)
//     res.send("added successfully")
// }
// const updatePrice=(req,res)=>{
//     res.send("update successfully")
// }
// module.exports={addProductStore,updatePrice}


const {database}=require("../config/db")
const employee=database.collection("employee")
const addemployee=async(req,res)=>{
    const employee=req.body;
    const data=await show.insertOne({
        "firstName": "John",
        "lastName": "Doe",
        "salary": "25000",
        "department": "HR",
        "lastCompany": "X",
        "lastSalary": "10000",
        "overallExp": "2",
        "contactInfo": "1234567890",
        "yearGrad": "2016",
        "gradStream": "CSE"
    })
    console.log(data)
    res.send({msg:"added successfully",data:data})
}
module.exports={addemployee}
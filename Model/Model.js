require("../Config/DB")
const collection=require("../Config/Collection")
const mongoose = require("mongoose")

const employeeModel= new mongoose.Schema({

    employeeName:{type:String,required:[true,"name is required field"]},
    employeeTitle:{type:String,required:[true,"name is required field"]},
    employeeDeparment:{type:String,required:[true,"name is required field"]},
    employeeSalary:{type:Number,required:[true,"age is required field"]}

})



   const employeeSchema=mongoose.model(collection.employee,employeeModel)
      module.exports=employeeSchema
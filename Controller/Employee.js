const { log } = require("console")
const { employee } = require("../Config/Collection")
const employeeModel=require("../Model/Model")
const express= require("express")
const { ObjectId } = require("bson");



require("dotenv").config({path:"../../.env"})
module.exports={
  
        async addEmployee(addData){
        
            const response={}
            // console.log(addData);
            
            // const add=new employeeModel ({
            // employeeName : addData.employeeName,
            // employeeTitle: addData.employeeTitle,
            // employeeDeparment:addData.employeeDeparment,   
            // employeeSalary: addData.employeeSalary
            // } )
            // console.log(add);
    
            try {
                const saveEmployeeData= await employeeModel.create(addData)

                if(saveEmployeeData){
                    response.status="success",
                    response.message="addemployee sucessfully"
                }
                else{
                    response.status="failed",
                    response.message="not add"
                }
            } catch (error) {
                response.status="falied",
                response.message="something wrong "
                
            }
            return response
        },

       async DeleteData(deleteData){
        const response={}
        console.log(deleteData);
        try {
            const res=  await employeeModel.deleteOne({_id:deleteData})
            console.log(res);
            if(res){
              response.status="success",
              response.message="sucessfully deleted"
            }
            else{
              response.status="falied",
              response.message="employee data can't delete"
            }
            
        } catch (error) {
            console.log(error);
        }
     return response

        },


        async update(updateData){
            const response ={}     
          try {
            const {employeeName,employeeTitle,employeeDeparment,employeeSalary} = updateData.body
            console.log(employeeName,employeeDeparment);

            const update= await employeeModel.findOneAndUpdate({_id:updateData.params._id},{employeeName:employeeName,employeeTitle:employeeTitle,employeeDeparment:employeeDeparment,employeeSalary:employeeSalary})
           
         if(update){
            response.status="success",
            response.message="add succesfully data",
            response.data={employeeName,employeeTitle,employeeDeparment,employeeSalary}
         }
            
          } catch (error) {
                response.status="falied",
                response.message="someting wrong"
          }
          return response
        },

        async allData(){
            const response={ }
            try {
                const data = await employeeModel.find()
                if(data){
                    response.status="success",
                    response.message="all data add successfully"
                    response.data=data
                }
                
            } catch (error) {
                response.status="falied",
                response.message="someting wrong"
                
            }



            return response
        },


        async SingleData(data){
            const id= data.params._id
        console.log(id);
    const response={}
        
        try {
            const single = await employeeModel.findOne({_id: new ObjectId(data.params._id)},{employeeName:1, employeeTitle:1, employeeDeparment:1, employeeSalary:1,_id:1})
            if(single){
                response.status="success",
                response.message="get single employee data"
                response.data=single
            }
            else{
                response.status="falied",
                response.message="can't get employee single data"
            }
        } catch (error) {
            response.status="falied",
            response.message="someting wrong"
            
        }
        return response
        }
    }






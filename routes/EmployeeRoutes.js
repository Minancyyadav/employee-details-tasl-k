const express = require("express")
const { addEmployee, DeleteData, update, allData, SingleData } = require("../Controller/Employee")
const { request } = require("http")
const { response } = require("../App")


const router=express.Router()


router.post("/addEmployee",async(request,response)=>{
    const res= await addEmployee(request.body)
    response.json(res)
})


router.delete("/deleteEmplyee/:_id",async(request,response)=>{
    const res = await DeleteData(request.params._id)
    response.json(res)
})


router.put("/update/:_id",async(request,response)=>{
    const res= await update(request)
    response.json(res)
})
router.get("/getsingleData/:_id",async(request,response)=>{
    const res=await SingleData(request)
    response.json(res)

})
router.get("/allData",async(request,response)=>{
    const res= await allData(request)
    response.json(res)
})


module.exports=router
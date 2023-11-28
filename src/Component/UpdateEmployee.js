import { useEffect, useState } from "react";
import {  loadUser, updateEmployees } from "../api/Api";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateEmployee(){
    const [form,setForm]=useState({})
    console.log(form);
    const parms=useParams()
    const navigate=useNavigate();
    

    useEffect(()=>{

        loadUser(parms.id).then((response)=>{
            if(response.status==="success"){
                setForm(response.data)
            }
        })

    },[])
       
       async function handleSubmit(event){
            event.preventDefault()
            const response= await updateEmployees(parms.id,form)
            if(response.status==="success"){
                setTimeout(()=>{
                    navigate("/")

                },2000)
            }

    
           
        }
    
    
        function handleChange(event){
            setForm({...form, [event.target.name]:event.target.value})
            console.log(event.target.value);
    
    
        }


    return(
        <>
         <div className="container-fluid add">
            <div className="row">
                <div className="full">
                <h1>upADD EMPLOYEE</h1>
                    <div className="col-md-7 full_form">
                      
                        <form className="form" onSubmit={handleSubmit}>
                            <input name="employeeName" type="text" className="add_input" value={form.employeeName} onChange={handleChange} placeholder="NAME" />
                            <input name="employeeTitle" type="text" className="add_input" value={form.employeeTitle} onChange={handleChange} placeholder="TITLE"  />
                            <input name="employeeDeparment" type="text" className="add_input" value={form.employeeDeparment} onChange={handleChange} placeholder="DEPARTMENT"  />
                            <input name="employeeSalary" type="number" className="add_input" value={form.employeeSalary} onChange={handleChange} placeholder="SALARY"  />
                            <input  type="submit" className="add_input add_btn"/>


                        </form>

                    </div>

                </div>

            </div>



        </div>
        
        
        </>
    )
}
import { useState } from "react"
import "./employee.css"
import { signupData } from "../api/Api"
import { useNavigate } from "react-router-dom"


export default function AddEmployee(){
    const [form,setForm]=useState({})
const navigate=useNavigate();

   
   async function handleSubmit(event){
        event.preventDefault()
        const response=  await signupData(form)

        if(response.status==="success"){
            setTimeout(() => {
                navigate("/")
            }, 2000);
            
        }
       
    }


    function handleChange(event){
        setForm({...form, [event.target.name]:event.target.value})
        // console.log(event.target.value);


    }

   
   
   
    return(
        <>
        <div className="container-fluid add">
            <div className="row">
                <div className="full">
                <div className="headingg">
                    <h1>ADD EMPLOYEE</h1>

                </div>
                    <div className="col-md-7 full_form">
                      
                        <form className="form" onSubmit={handleSubmit}>
                            <input name="employeeName" type="text" className="add_input" onChange={handleChange} placeholder="NAME" />
                            <input name="employeeTitle" type="text" className="add_input" onChange={handleChange} placeholder="TITLE"  />
                            <input name="employeeDeparment" type="text" className="add_input" onChange={handleChange} placeholder="DEPARTMENT"  />
                            <input name="employeeSalary" type="number" className="add_input" onChange={handleChange} placeholder="SALARY"  />
                            <input  type="submit" className="add_input add_btn"/>


                        </form>

                    </div>

                </div>

            </div>



        </div>
        
        </>
    )
}
import { useEffect, useState } from "react"
import "./Dasboard.css"
import { getAllEmployee } from "../../api/Api"
import { Link } from "react-router-dom"

export default function Dasboard(){
    const [alldata,setAlldata]=useState([])


    useEffect(()=>{
        getAllEmployee().then((response)=>{
            if(response.status==="success"){
                console.log(response.data);

                setAlldata(response.data)
            }
        })

    },[])
    return(
        <>
      <div className="container-fluid">
        <div className="row">
        
            <div className="dash_full"> 
            
               <div className="add_btnn">
                <button className="btn"><Link to="/add"style={{ textDecoration: 'none',color:"black" }}>Add Employee</Link></button>

            </div>

                <div className="col-md-12 table_container">
                
                    <div className="tabel_full">
                    <h1>EMPLOYEE ALL DATA</h1>
                        <table className="table" border={2}>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>TITLE</th>
                                    <th>DEPARTMENT</th>
                                    <th>SALARY</th>
                                    <th>DELETE</th>
                                    <th>UPDATE</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    alldata.map((data,i)=>(
                                        <tr key={i}>
                                            <td>{data.employeeName}</td>
                                            <td>{data.employeeTitle}</td>
                                            <td>{data.employeeDeparment}</td>
                                            <td>{data.employeeSalary}</td>
                                            <td><button className="btn_task"><Link style={{ textDecoration: 'none',color:"black",padding:"7px" }} to={`/delete/${data._id}`}>delete</Link></button></td>
                                            <td><button className="btn_task"><Link style={{ textDecoration: 'none',color:"black",padding:"7px" }} to={`/update/${data._id}`}>update</Link></button></td>
                                        </tr>
                                    )
                                
                                    )
                                }

                            </tbody>
                        </table>

                    </div>

                </div>

            </div>


        </div>

      </div>
        
        </>
    )
}
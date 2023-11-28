import { useNavigate, useParams } from "react-router-dom"
import { deleteEmployee } from "../api/Api"
import "./employee.css"
export default function Delete(){
    const parms=useParams()
    console.log(parms.id);
    const navigate=useNavigate()

deleteEmployee(parms.id).then((response)=>{
    if(response.status==="success"){
        setTimeout(()=>
        {
            navigate("/")

        },2000)
    }

})

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 del_container">
                    <div className="textData">

                        <h1>delete employee successfully</h1>

                    </div>

                </div>

            </div>

        </div>
        
        
        
        </>
    )

}
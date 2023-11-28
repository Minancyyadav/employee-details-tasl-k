import { Route, BrowserRouter as Router, Routes, } from "react-router-dom"
import AddEmployee from "./Component/AddEmployee"
import Dasboard from "./Component/Dasboard.js/Dasboard"
import Delete from "./Component/Delete"
import UpdateEmployee from "./Component/UpdateEmployee"

export default function App(){


  return(
    <>
    {/* <h1>hello jaipur</h1> */}
    <Router>
      <Routes>
        <Route path="/add" element={<AddEmployee />}   />
        <Route path="/" element={<Dasboard />}   />
        <Route path="/delete/:id" element={<Delete />}   />
        <Route path="/update/:id" element={<UpdateEmployee />}   />

      </Routes>
    </Router>
   
    

    
    </>
  )
}
import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
export default function Create() {

    // const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const history =useNavigate()

    const handlesubmit=(e)=>{
    if (!name||!price) {
      alert("please fill all the filed")
    }else{
    
        e.preventDefault();
        console.log("click");
        axios.post("https://6594fec504335332df81c4f3.mockapi.io/CURD",
        {
            ProductName:name,
            ProductPrice:price

        })
        .then(()=>{
            window.alert("data added successfully!")
            history("/read")
        })

    
    }}

  return (
    <div>
        
  {/* <div className="mb-3">
    <label  className="form-label">Product ID</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp" onChange={(e)=>{setId(e.target.value)}}/>
  </div> */}
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label" >Product Name</label>
    <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Product Price</label>
    <input type="text" className="form-control" onChange={(e)=>{setPrice(e.target.value)}}/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={
   handlesubmit
    }>Submit</button>
 <Link to={"/read"}> <button type="submit" className="btn btn-primary">Read & Update</button></Link>


    </div>
  )
}



import React, { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import {  useNavigate } from "react-router-dom"
const Createusers = ()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=()=>{
    let payload = {name,salary,company}
    axios.post("http://localhost:3000/users",payload)
    .then(()=>{
        console.log("data is uploaded");

    })
    .catch(()=>{
        console.log("something went wrong");
    })

    navigate("/users")
}
    
    
    return(
        <div id={style.myform}>
            
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" value={name}  onChange={nameData}/><br />
                    <label htmlFor="">Salary</label>
                    <input type="text" value={salary} onChange={salaryData}/><br />
                    <label htmlFor="">Company</label>
                    <input type="text" value={company}  onChange={companyData}/> <br />
                    <button onClick={formHandle}>Submit</button>
                </form>
              
        </div>
    )
}
export default Createusers
import { useEffect, useState } from "react"
import style from "./home.module.css"
import React from "react"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"

const Editusers=()=>{
    let [name, setName]=useState("")
    let [salary, setSalary]=useState("")
    let [company, setCompany]=useState("")
    let navigate=useNavigate()
    let {index} = useParams()
    console.log(index);
  

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((response)=>{
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
            console.log(response.data)
            

        }).catch(()=>{
            console.log("did not get the data")
        })
    },[])
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
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/users/${index}`,payload)
        .then(()=>{
            console.log("data has been uploaded");
        })
        .catch(()=>{
            console.log("data hasn't been uploaded");
        })

        navigate("/users")
   }
   

   
   


    return(
        <div id={style.myform}>
            
                <form action="">
                    <h1>Update User</h1>
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={nameData} /><br />
                    <label htmlFor="">Salary</label>
                    <input type="text" value={salary}  onChange={salaryData}/><br />
                    <label htmlFor="">Company</label>
                    <input type="text" value={company} onChange={companyData} /> <br />
                    <button onClick={formHandle} >Submit</button>
                </form>
              
        </div>
    )
}
export default Editusers

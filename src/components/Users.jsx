import React, { useEffect, useState } from "react"
import axios from "axios"
import style from "./home.module.css"
import { Link } from "react-router-dom"

const Users =()=>{
    let[content,setContent]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((response)=>{
            console.log("got the data");
             console.log(response.data)
            setContent(response.data);
        })
        .catch(()=>{
            console.log("did not get the data");
        })
    },[])
    let deleteData=(value)=>{
        axios.delete(`http://localhost:3000/users/${value}`)
        window.location.assign('/users')
    }

    return(
        <div id={style.usersHome}>
             {content.map((x)=>{
                  return(
                    <div id={style.cards}>
                        <table>
                            <tr>
                                <th colSpan="2">USER {x.id}</th>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{x.name}</td>
                            </tr>
                            <tr>
                                <td>Salary</td>
                                <td>{x.salary}</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>{x.company}</td>
                            </tr>
                            <tr>
                                <td><Link to={`/edit/${x.id}`}>EDIT</Link></td>
                                <td><button onClick={()=>{deleteData(x.id)}} >Delete</button></td>
                            </tr>

                        </table>
              
        </div>
                  )
                  })}
    </div>
    )
}
export default Users
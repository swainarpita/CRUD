import { BrowserRouter, Routes, Route } from "react-router-dom/dist"
import Homecrud from "./components/Homecrud"
import Createusers from "./components/Createusers"
import Users from "./components/Users"
import React from "react"
import Editusers from "./components/Editusers"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Homecrud/>
            <Routes>
                <Route  path="/createusers" element={<Createusers/>}/>
                <Route  path="/users" element={<Users/>}/>
                <Route  path="/edit/:index" element={<Editusers/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>

    )
}
export default App
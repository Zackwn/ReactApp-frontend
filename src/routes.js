import React from "react"
import {
    Routes, 
    Route 
} from "react-router-dom"

import Home from "./pages/home/home"
import Users from "./pages/users/users"
import Detail from "./pages/detail"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/:id" element={<Detail/>}/>
        </Routes>
    )
}

export default MainRoutes
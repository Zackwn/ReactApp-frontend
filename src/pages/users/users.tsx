import React, { useEffect, useState } from "react"
import api from "../../services/api"
import "./styles.css"

interface Users {
    id: number,
    name: string,
    email: string
}

const Users = () => {
    
    const [users, setUsers] = useState<Users[]>([])

    useEffect(() => {
        api.get("users").then( response => {
            setUsers(response.data)
        })
    }, [])

    return (
        <div id="Div">
            <div id="d1">
                <img id="img" src="http://localhost:3333/uploads/clipboard.svg" alt="Clipboard"/>
                <h1>Listagem de Users</h1>
            </div>
            <div id="d2">
                <div id="d3">
                    <h2>Name</h2> 
                    <h2>E-mail</h2>
                </div>
                <ul>
                    {users.map( user => (
                        <li className="LI" key={user.id}>
                            <h3>{user.name}</h3>
                            <p className="P">{user.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Users
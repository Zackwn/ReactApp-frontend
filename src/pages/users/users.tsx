import React, { useEffect, useState } from "react"
import api from "../../services/api"
import { useNavigate } from "react-router"
import "./styles.css"

interface Users {
    id: number,
    name: string,
    email: string
}

let page = 1

const Users = () => {
    const navigate = useNavigate()

    const [users, setUsers] = useState<Users[]>([])

    useEffect(() => {
        api.get(`users?page=${page}`).then( response => {
            setUsers(response.data)
        })
    }, [])

    async function handlePageBack() {
            if (page !== 1) {
                page = page - 1
            }
            console.log(page)
            api.get(`users?page=${page}`).then( response => {
                setUsers(response.data)
            })
    }

    async function handleNextPage() {
        page = page + 1
        api.get(`users?page=${page}`).then( response => {
            setUsers(response.data)
        })
    }

    async function handleGoToDetail(id: number) {
        navigate(`/users/${id}`)
    }

    return (
        <div id="Div">
            <div id="d1">
                <img id="img" src="http://localhost:3333/uploads/clipboard.svg" alt="Clipboard"/>
                <h1>Listagem de Users</h1>
            </div>
            <div id="d2">
                <div id="d3">
                    <div className="divS">
                        <div className="sD" onClick={handlePageBack}>
                            <img id="r" className="imgS" src="http://localhost:3333/uploads/seta-left.png" alt="seta"/>
                            <p className="pS" id="r">Back</p>
                        </div>
                        <h2>Name</h2>   
                    </div>
                    <div className="divS">
                        <h2>E-mail</h2>
                        <div className="sD" onClick={handleNextPage}>
                            <img id="l" className="imgS" src="http://localhost:3333/uploads/seta-right.png" alt="seta"/>
                            <p className="pS" id="l">Next</p>
                        </div>
                    </div>
                </div>
                <ul>
                    {users.map( user => (
                        <li className="LI" key={user.id} onClick={() => handleGoToDetail(user.id)}>
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
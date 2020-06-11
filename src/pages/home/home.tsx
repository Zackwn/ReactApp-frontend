import React, { useState, MouseEvent, ChangeEvent, FormEvent } from "react"
import { useHistory } from "react-router-dom"
import "./styles.css"
import api from "../../services/api"

// const hours = new Date().getHours()

const Home = () => {
    const history = useHistory()
    
    const [backBtn, setBackBtn] = useState<string>("btn")
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    function handleMouseOver(event: MouseEvent) {
        event.target.addEventListener("mouseover", () => {
            setBackBtn("mO")
        })
        event.target.addEventListener("mouseout", () => {
            setBackBtn("btn")
        })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const data = { name, email }

        await api.post("/users", data)

        history.push("/users")
    }

    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.value
        setName(name)
    }

    function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
        const email = event.target.value
        setEmail(email)
    }

    return (
        <div id="content">
            <div id="container">
                <div>
                    <img id="img" src="http://localhost:3333/uploads/caixa.svg" alt="Web-Development"/>
                </div>
                <div>
                    <h2 className="color">
                        Sign up to ReactApp.
                    </h2>
                </div>
                <div className="Formdiv">
                    <form onSubmit={handleSubmit}>
                        <input 
                            onChange={handleChangeName}
                            className="color"
                            type="text"
                            name="name" 
                            id="name"
                            placeholder="Name"
                        />

                        <input 
                            onChange={handleChangeEmail}
                            className="color"
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="E-mail"
                        />

                        <button type="submit" className={backBtn} onMouseOver={handleMouseOver}>
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
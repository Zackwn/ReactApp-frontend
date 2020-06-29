import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import api from "../../services/api"
import "./styleDetail.css"

interface Data {
    id: number,
    name: string,
    email: string
}

const Detail = () => {
    const params = useParams() 

    const [data, setData] = useState<Data>({} as Data)

    useEffect(() => {
        api.get(`/users/${params.id}`).then( response => {
            setData(response.data)
        })
    }, [])

    if (!data) {
        return
    }

    if (data.id === undefined) {
        return (
            <div id="divDetail">
                <h1 className="tD">
                    {`User de id: ${params.id}, não foi encontrado`}
                </h1>
            </div>
        )
    }

    return (
        <div id="divDetail">
            <h1 className="tD">Id: {data.id}</h1>
            <h2 className="tD">Name: {data.name}</h2>
            <h3 className="tD">E-mail: {data.email}</h3>
        </div>
    )
}

export default Detail
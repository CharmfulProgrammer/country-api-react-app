import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCountry } from "../libs/api"

const Details = () => {
    const {id} = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        getCountry(id)
        .then(data => {
            setData(data)
        })
    }, []);
    return (
        <div>
            {data.name?.official}
        </div>
    )
}

export default Details
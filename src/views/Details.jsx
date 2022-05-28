import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCountry, getCountriesName } from "../libs/api"

const Details = () => {
    const {id} = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        getCountry(id)
        .then(data => {
            setData(data)
        })
    }, []);
    if(!data.name) return
    return (
        <div>
            <div className="m-auto w-3/4">
                <div className="shadow">
                    <img src={data.flags.svg} alt="" />
                </div>
                <h1 className="text-xl font-bold">{data.name.official}</h1>
                {Object.values(data.name.nativeName || {}).map(name => (
                    <span>{name.common}</span>
                ))}
            </div>
        </div>
    )
}

export default Details
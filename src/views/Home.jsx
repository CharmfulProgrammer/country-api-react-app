import { useEffect, useState } from "react"
import { getAllCountries } from "../libs/api"
import Card from "../components/Card"

const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        getAllCountries()
        .then(data => {
            setCountries(data)
        })
    }, [])
    return (
        <div className="max-w-screen-xl m-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-16 mx-5 xl:m-0">
                {countries.map(country => (
                    <Card {...country} key={country.cca3}/>
                ))}
            </div>
        </div>
    )
}

export default Home;
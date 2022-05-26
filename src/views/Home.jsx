import { useEffect, useState } from "react"
import { getAllCountries } from "../libs/api"
import Card from "../components/Card"
import SearchBar from "../components/SearchBar"

const Home = () => {
    const [countries, setCountries] = useState([])
    const [filteresCountries, setFilteredCountries] = useState([])
    useEffect(() => {
        getAllCountries()
        .then(data => {
            setCountries(data)
            setFilteredCountries(data)
        })
    }, [])
    return (
        <div className="w-3/4 md:w-full max-w-screen-xl">
            <div>
                <SearchBar setFilteredCountries={setFilteredCountries} countries={countries}/>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-16">
                {filteresCountries.map(country => (
                    <Card {...country} key={country.cca3}/>
                ))}
            </div>
        </div>
    )
}

export default Home;
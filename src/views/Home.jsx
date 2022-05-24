import { useEffect, useState } from "react";
import { getAllCountries } from "../libs/api";

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        getAllCountries()
        .then(data => {
            setCountries(data)
        })
    }, [])
    return (
        <div>
            {countries.map(country => (
                <div key={country.cca3}>
                    <div>
                        <img src={country.flags.svg} alt="" />
                    </div>
                </div> 
            ))}
        </div>
    )
}

export default Home;
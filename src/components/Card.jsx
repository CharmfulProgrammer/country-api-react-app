import numberWithCommas from "../libs/numberWithComma"
import { Link } from "react-router-dom"

const Card = ({flags, name, population, region, capital, cca3}) => {
    return (
        <div>
            <div>
                <Link to={cca3}><img className="object-cover w-full md:h-36" src={flags?.svg} alt={"Flag of " + name?.official} /></Link>
            </div>
            <div className="flex flex-col p-5">
                <h2 className="py-3 font-bold text-xl">{name?.official}</h2>
                <ul>
                    <li><span className="font-bold">Population:</span> {numberWithCommas(population)}</li>
                    <li><span className="font-bold">Region:</span> {region}</li>
                    <li><span className="font-bold">Capital:</span> {capital}</li>
                </ul>
            </div>
        </div>
    )
}

export default Card
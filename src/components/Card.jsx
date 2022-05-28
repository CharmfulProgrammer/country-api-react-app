import numberWithCommas from "../libs/numberWithComma";
import { Link } from "react-router-dom";

const Card = ({ flags, name, population, region, capital, cca3 }) => {
  return (
    <div className="shadow rounded overflow-hidden">
      <div>
        <Link to={cca3}>
          <img
            className="object-cover w-full md:h-36"
            src={flags.svg}
            alt={"Flag of " + name.official}
          />
        </Link>
      </div>
      <div className="flex flex-col p-5">
        <h2 className="py-3 font-bold text-xl">{name.common}</h2>
        <p className="font-bold">Population:</p> {numberWithCommas(population)}
        <p className="font-bold">Region:</p> {region}
        <p className="font-bold">Capital:</p> {capital}
      </div>
    </div>
  );
};

export default Card;

import numberWithCommas from "../libs/numberWithComma";
import { Link } from "react-router-dom";

const Card = ({ flags, name, population, region, capital, cca3 }) => {
  return (
    <div className="shadow rounded overflow-hidden bg-white">
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
        <p>
          <span className="font-bold">Region:</span> {region}
        </p>
        <p>
          <span className="font-bold">Population:</span> {numberWithCommas(population)}
        </p>
        <p>
          <span className="font-bold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;

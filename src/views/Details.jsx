import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCountry, getCountriesName } from "../libs/api";
import numberWithComma from "../libs/numberWithComma";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [nativeName, setNativeName] = useState("")
  useEffect(() => {
    getCountry(id)
      .then((data) => {
        setData(data);
        setLoaded(true);
        setNativeName(data.name.nativeName[Object.keys(data.name.nativeName)[0]].common)
      })
      .catch(() => {});
  }, []);
  if (!loaded) return;
  return (
    <div className="dark:text-white flex flex-col">
      <aside className="my-4">
        <Link to="/">
          <button className="p-2 px-7 shadow rounded-sm dark:bg-gray-800">
            Back
          </button>
        </Link>
      </aside>
      <div className="flex flex-col lg:flex-row">
        <div>
          <img src={data.flags.svg} alt="" />
        </div>
        <article>
          <header>
            <h1>{data.name.common}</h1>
          </header>
          <section>
            <p>Native Name: {nativeName}</p>
            <p>Population: {numberWithComma(data.population)}</p>
            <p>Region: {data.region}</p>
            <p>Sub Region: {data.subregion}</p>
            <p>Capital: {data.capital}</p>
          </section>
          <section></section>
        </article>
      </div>
    </div>
  );
};

export default Details;

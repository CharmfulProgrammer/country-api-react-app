import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCountry, getCountriesName } from "../libs/api";
import numberWithComma from "../libs/numberWithComma";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [nativeNames, setNativeNames] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [borders, setBorders] = useState([]);
  useEffect(() => {
    getCountry(id).then((data) => {
      setData(data);
      setNativeNames(
        Object.keys(data.name.nativeName).map(
          (n) => data.name.nativeName[n].common
        )
      );
      setCurrencies(
        Object.keys(data.currencies).map((m) => data.currencies[m].name)
      );
      setLanguages(Object.values(data.languages));
      getCountriesName(data.borders).then((border) => {
        setBorders(border)
        // console.log(borders)
        setLoaded(true);
      });
    });
  }, []);
  if (!loaded) return;
  return (
    <div className="dark:text-white flex flex-col w-5/6 max-w-screen-lg">
      <aside className="my-4">
        <Link to="/">
          <button className="p-2 px-7 shadow rounded-sm bg-white dark:bg-gray-800">
            Back
          </button>
        </Link>
      </aside>
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="max-w-xl mr-6">
          <img
            src={data.flags.svg}
            alt={"flag of " + data.name.official}
            className="object-contain"
          />
        </div>
        <article className="grid grid-cols-1 lg:grid-cols-6 items-start">
          <header className="lg:col-span-6 my-3">
            <h1 className="text-3xl font-bold">{data.name.common}</h1>
          </header>
          <section className="lg:col-span-3 mb-3">
            <p>
              <span className="font-bold">Native Names:</span>{" "}
              {nativeNames.join(", ")}
            </p>
            <p>
              <span className="font-bold">Population:</span>{" "}
              {numberWithComma(data.population)}
            </p>
            <p>
              <span className="font-bold">Region:</span> {data.region}
            </p>
            <p>
              <span className="font-bold">Sub Region:</span> {data.subregion}
            </p>
            <p>
              <span className="font-bold">Capital:</span> {data.capital}
            </p>
          </section>
          <section className="lg:col-span-3 mb-3">
            <p>
              <span className="font-bold">Top Level Domain:</span>{" "}
              {data.tld.join(", ")}
            </p>
            <p>
              <span className="font-bold">Currencies:</span>{" "}
              {currencies.join(", ")}
            </p>
            <p>
              <span className="font-bold">Languages:</span>{" "}
              {languages.join(", ")}
            </p>
          </section>
          {borders && <section className="lg:col-span-6">
            <p className="flex items-center flex-wrap">
              <span className="font-bold whitespace-nowrap">Border Countries:</span>{" "}
              {borders.map((border, i) => (
                <span className="p-1 bg-white dark:bg-gray-800 shadow rounded-sm m-1 block whitespace-nowrap" key={i}>{border.name.common}</span>
              ))}
            </p>
          </section>}
        </article>
      </div>
    </div>
  );
};

export default Details;

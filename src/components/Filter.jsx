import { useEffect, useState } from "react";
import useBindValues from "../hooks/useBindValues";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { BsCheckSquare } from "react-icons/bs";

const Filter = ({ setFilteredCountries, countries }) => {
  const regions = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctic",
  ];
  const [dropped, setDropped] = useState(false);
  const [region, bindRegion] = useBindValues();
  useEffect(() => {
    setFilteredCountries(
      region.length
        ? countries.filter((country) => region.includes(country.region))
        : countries
    );
  }, [region]);
  return (
    <fieldset className="relative bg-white dark:bg-gray-800 dark:text-white p-2 px-5 shadow rounded">
      <div className="flex items-center justify-between hover:cursor-pointer" onClick={() => setDropped(!dropped)}>
        <h3>Filter by Region</h3>
        <button className="text-xl">
          {dropped ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </button>
      </div>
      <menu
        className={
          "absolute left-0 p-2 px-5 top-full mt-1 bg-inherit w-full shadow rounded " +
          (dropped ? "block" : "hidden")
        }
      >
        {regions.map((region, index) => (
          <li key={index} className="my-1">
            <label className="flex justify-between items-center hover:cursor-pointer">
              {region}
              <input
                type="checkbox"
                name="regions"
                className="p-1 peer hidden"
                onChange={bindRegion(region)}
              />
              <span className="hidden peer-checked:block"><BsCheckSquare/></span>
            </label>
            {/* {index !== regions.length - 1 && <hr />} */}
          </li>
        ))}
      </menu>
    </fieldset>
  );
};

export default Filter;

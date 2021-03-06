import { useEffect, useState } from "react";
import { getAllCountries } from "../libs/api";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
      setFilteredCountries(data);
      setLoaded(true);
    });
  }, []);
  if(!loaded) return
  return (
    <div className="w-10/12 max-w-screen-lg">
      <div className="flex flex-col md:flex-row justify-between my-3">
        <SearchBar
          setFilteredCountries={setFilteredCountries}
          countries={countries}
        />
        <Filter
          setFilteredCountries={setFilteredCountries}
          countries={countries}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
        {filteredCountries.map((country) => (
          <Card {...country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import { debounce } from "lodash";
import { BiSearchAlt } from "react-icons/bi"
const SearchBar = ({ setFilteredCountries, countries }) => {
  const handleCountries = debounce((e) => {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
      );
    }, 200);
  return (
    <div className="flex p-2 px-5 shadow rounded items-center">
      <span>
        <BiSearchAlt/>
      </span>
      <input
        type="text"
        placeholder="Search for a country"
        className="ml-1 focus:outline-none"
        onInput={handleCountries}
      />
    </div>
  );
};

export default SearchBar;

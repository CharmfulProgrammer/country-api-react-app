import { debounce } from "lodash";
import { BiSearchAlt } from "react-icons/bi";
const SearchBar = ({ setFilteredCountries, countries }) => {
  const handleCountries = debounce((e) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }, 200);
  return (
    <fieldset className="flex mb-2 md:m-0 p-2 px-5 shadow rounded items-center bg-white dark:bg-gray-800 dark:placeholder:text-gray-400 dark:text-white">
      <BiSearchAlt />
      <input
        type="text"
        placeholder="Search for a country"
        className="ml-1 bg-transparent focus:outline-none focus:border-b-2 border-blue-700"
        onInput={handleCountries}
      />
    </fieldset>
  );
};

export default SearchBar;

const SearchBar = ({setFilteredCountries, countries}) => {
    function handleFilteredCountries(e) {
        setFilteredCountries(countries.filter(country => country.include(e.target.value)))
    }
    return (
        <div>
            <input type="text" placeholder="Search for a country" className="focus:outline-none" onChange={(e) => handleFilteredCountries(e)}/>
        </div>
    )
}

export default SearchBar
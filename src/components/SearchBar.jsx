const SearchBar = ({setFilteredCountries, countries}) => {
    function handleFilteredCountries(e) {
        setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    return (
        <div>
            <input type="text" placeholder="Search for a country" className="focus:outline-none" onInput={handleFilteredCountries}/>
        </div>
    )
}

export default SearchBar
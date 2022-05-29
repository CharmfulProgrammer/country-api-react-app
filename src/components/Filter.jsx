let checkRegions = []

const Filter = ({setFilteredCountries, countries}) => {
    const regions = ["Africa" , "Americas", "Asia", "Europe", "Oceania", "Antarctic"]
    function handleFilteredCountries(region) {
        return (e) => {
            const isChecked = e.target.checked 
            if(isChecked) {
                checkRegions.push(region)
            } else {
                checkRegions = checkRegions.filter(m => m !== region)
            }

            setFilteredCountries(checkRegions.length ? countries.filter(country => checkRegions.includes(country.region)) : countries)
            console.log(isChecked, checkRegions)
        }
    }
    return (
        <fieldset className="relative bg-white p-2 px-5 shadow rounded">
            <h3>Filter by Region</h3>
            <menu className="absolute left-0 p-2 px-5 top-full mt-1 bg-inherit w-full shadow rounded">
                {regions.map((region, index) => (
                    <li key={index} className="my-1">
                        <label className="flex justify-between items-center">
                            {region}
                            <input type="checkbox" name="regions" className="p-1" onChange={handleFilteredCountries(region)}/>
                        </label>
                        {(index !== regions.length - 1) && <hr/>}
                    </li>
                ))}
            </menu>
        </fieldset>
    )
}

export default Filter;
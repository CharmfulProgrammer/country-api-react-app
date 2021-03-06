export const getAllCountries = async () => {
  const allCountries = sessionStorage.getItem("allCountries");
  if (allCountries) {
    return JSON.parse(allCountries);
  }
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags,cca3"
  );
  const data = await res.json();
  sessionStorage.setItem("allCountries", JSON.stringify(data));
  return data;
};

export const getCountry = async (alpha) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${alpha}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`
  );
  const data = await res.json();
  return data;
};

export const getCountriesName = async (alphas = []) => {
  if (!alphas.length) return undefined;
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/?codes=${alphas?.join(
      ","
    )}&fields=name`
  );
  const data = await res.json();
  return data;
};

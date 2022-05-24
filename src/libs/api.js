export const getAllCountries = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags,cca3"
  );
  const data = await res.json();
  return data;
};

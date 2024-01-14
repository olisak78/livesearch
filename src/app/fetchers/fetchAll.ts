import fetch from 'isomorphic-fetch';

// This is an endpoint which fetches all the countries with only specific fields which I need
export const getAllCountries = async () => {
  const url =
    'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population';
  const response = await fetch(url);
  const result = await response.json();
  return {
    result,
  };
};

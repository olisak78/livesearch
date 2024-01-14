'use client';
import { useEffect } from 'react';
import LiveSearch from './LiveSearch';
import { getAllCountries } from './fetchers/fetchAll';
import CountryCard from './CountryCard';
import { useAtom } from 'jotai';
import { atomCountries } from './types';

// This is a home page, which displays LiveSearch and CountryCard components
// Upon loading, it fetches all countries and sends them as prop to LiveSearch

export default function Home() {
  const [data, setData] = useAtom(atomCountries);
  useEffect(() => {
    getAllCountries()
      .then((countries) => {
        setData(
          countries.result.map((country: any) => {
            return {
              name: country.name.common,
              flag: country.flags.png,
              capital: country.capital[0],
              region: country.region,
              population: country.population,
            };
          })
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-10 px-52'>
      <LiveSearch countries={data} />

      <CountryCard />
    </main>
  );
}

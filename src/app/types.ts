import { atom } from 'jotai';

export type CountryFull = {
  name: string;
  flag: string;
  capital: string;
  region: string;
  population: number;
};

// Atom definitions - global state vars
export const atomCountries = atom([]);
export const atomQuery = atom('');
export const atomSelected = atom(null);

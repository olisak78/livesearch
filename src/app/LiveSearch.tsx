/* eslint-disable @next/next/no-img-element */
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { CountryFull, atomQuery, atomSelected } from './types';
import { useAtom } from 'jotai';

type LiveSearchProps = {
  countries: CountryFull[];
};

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

// This is LiveSearch component which allows to search by country name, with results displayed dynamically under the text box
// User can click on any country in the results list to display the selected country in the card below

const LiveSearch = ({ countries }: LiveSearchProps) => {
  const [query, setQuery] = useAtom(atomQuery);
  const [selectedCountry, setSelectedCountry] = useAtom(atomSelected);

  const filteredcountries =
    query === ''
      ? countries
      : countries.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as='div' value={selectedCountry} onChange={setSelectedCountry}>
      <Combobox.Label className='block text-sm font-medium leading-6 text-gray-900'>
        Live Search
      </Combobox.Label>
      <div className='relative mt-2'>
        <Combobox.Input
          className='w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person: any) => person?.name}
        />
        <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
          <ChevronUpDownIcon
            className='h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </Combobox.Button>

        {filteredcountries.length === 0 && (
          <Combobox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            <Combobox.Option
              key={0}
              value=''
              className='relative cursor-default select-none py-2 pl-3 pr-9'
            >
              {({ active, selected }) => (
                <>
                  <div className='flex items-center'>Not Found</div>
                </>
              )}
            </Combobox.Option>
          </Combobox.Options>
        )}
        {filteredcountries.length > 0 && (
          <Combobox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {filteredcountries.map((country) => (
              <Combobox.Option
                key={country.name}
                value={country}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className='flex items-center'>
                      <img
                        src={country.flag}
                        alt=''
                        className='h-6 w-6 flex-shrink-0 rounded-full'
                      />
                      <span
                        className={classNames(
                          'ml-3 truncate',
                          selected && 'font-semibold'
                        )}
                      >
                        {country.name}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};
export default LiveSearch;

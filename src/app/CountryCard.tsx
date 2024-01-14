/* eslint-disable @next/next/no-img-element */
import {
  GlobeAmericasIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/20/solid';
import { useAtom } from 'jotai';
import { CountryFull, atomSelected } from './types';

// This is CountryCard component which displays the details of the selected country: Name, Flag, Capital, Region and Population

const CountryCard = () => {
  const [country, setCountry] = useAtom(atomSelected);

  return (
    country && (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='lg:col-start-3 lg:row-end-1'>
          <div className='rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5'>
            <dl className='flex flex-wrap'>
              <div className='flex-auto pl-6 pt-6'>
                <dt className='text-lg font-semibold leading-6 text-gray-900'>
                  {(country as CountryFull).name}
                </dt>
              </div>
              <div className='flex-none self-end px-6 pt-4'>
                <img
                  className='mx-auto h-20 w-32 flex-shrink-0 '
                  src={(country as CountryFull).flag}
                  alt=''
                />
              </div>
              <div className='mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6'>
                <dt className='flex-none'>
                  <BuildingLibraryIcon
                    className='h-6 w-5 text-gray-400'
                    aria-hidden='true'
                    title='Capital'
                  />
                </dt>
                <dd className='text-sm font-medium leading-6 text-gray-500'>
                  {(country as CountryFull).capital}
                </dd>
              </div>
              <div className='mt-4 flex w-full flex-none gap-x-4 px-6'>
                <dt className='flex-none'>
                  <span className='sr-only'>Due date</span>
                  <GlobeAmericasIcon
                    className='h-6 w-5 text-gray-400'
                    aria-hidden='true'
                    title='Region'
                  />
                </dt>
                <dd className='text-sm font-medium leading-6 text-gray-500'>
                  {(country as CountryFull).region}
                </dd>
              </div>
              <div className='mt-4 flex w-full flex-none gap-x-4 px-6 pb-6'>
                <dt className='flex-none'>
                  <span className='sr-only'>Status</span>
                  <UserGroupIcon
                    className='h-6 w-5 text-gray-400'
                    aria-hidden='true'
                    title='Population'
                  />
                </dt>
                <dd className='text-xs leading-6 text-gray-500'>
                  {(country as CountryFull).population.toLocaleString('en-US')}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    )
  );
};

export default CountryCard;

import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Country } from '../../type';

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const countriesResponse = await axios.get('https://restcountries.com/v2/all?fields=alpha3Code,name');
      setCountries(countriesResponse.data);
    }
    getCountries()
  }, [])

  return (
    <>
      {countries.map((country) => (
        <div key={country.alpha3Code}>
          <p>{country.name}</p>
        </div>
      ))}
    </>
  )
}

export default CountryList;
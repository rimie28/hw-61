import axios from 'axios';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { CountryInfoProps } from '../../type';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  alpha3Code: string;
}

const CountryInfo:React.FC<Props> = ({alpha3Code}) => {
  const [countryInfo, setCountryInfo] = useState<CountryInfoProps | null>(null)
  const [borderCountries, setBorderCountries] = useState<string[]>([])

  useEffect(() => {
    const getCountryInfo = async () => {
      const infoResponse = await axios.get(`https://restcountries.com/v2/alpha/${alpha3Code}`)
      setCountryInfo(infoResponse.data)

      if (infoResponse.data.borders.length > 0) {
        const promise = infoResponse.data.borders.map(async (borderCountry:string) => {
          const borderCountryResponse = await axios.get(`https://restcountries.com/v2/alpha/${borderCountry}`)
          return borderCountryResponse.data.name
        })
        const allNames = await Promise.all(promise)
        setBorderCountries(allNames)
      }
    }
    getCountryInfo()
  }, [alpha3Code])

  if (!countryInfo) {
    return (
      <div className="">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h3>{countryInfo.name}</h3>
      <p><b>Capital:</b>{countryInfo.capital}</p>
      <p><b>Population:</b>{countryInfo.population}</p>
      <p><b>Borders:</b>{borderCountries.length > 0 ? borderCountries.join(',') : 'No Border Countries!'}</p>
    </div>
  )
}

export default CountryInfo;
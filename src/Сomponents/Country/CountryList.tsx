import { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "../../type";
import * as React from "react";

interface CountryListProps {
  showCountryInfo: (alpha3Code: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({ showCountryInfo }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const countriesResponse = await axios.get(
        "https://restcountries.com/v2/all?fields=alpha3Code,name",
      );
      setCountries(countriesResponse.data);
    };
    getCountries();
  }, []);

  return (
    <>
      {countries.map((country) => (
        <div
          key={country.alpha3Code}
          onClick={() => showCountryInfo(country.alpha3Code)}
          className="border-bottom"
        >
          <p className="m-0 p-2">{country.name}</p>
        </div>
      ))}
    </>
  );
};

export default CountryList;

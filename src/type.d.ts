export interface Country {
  name: string;
  alpha3Code: string;
}

export interface CountryInfoProps {
  name: string;
  capital: string;
  population: number;
  borders: string;
  flag: string;
};
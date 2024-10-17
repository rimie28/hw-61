import CountryList from './Сomponents/Country/CountryList.tsx';
import CountryInfo from './Сomponents/Country/CountryInfo.tsx';
import React from 'react';



function App() {
  const [showCountry, setShowCountry] = React.useState<string | null>(null);

  const showCountryInfo = (alpha3Code: string) => {
    setShowCountry(alpha3Code);
  }

  return (
    <div className="container pt-5 d-flex gap-5">
      <div className="row col-4 border">
        <CountryList showCountryInfo={showCountryInfo}/>
      </div>
      <div className="row col-8">
        <CountryInfo alpha3Code={showCountry}/>
      </div>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react';
import './App.css'
import Countris from './Component/Countris';
import Search from './Component/Search';

const url = "https://restcountries.com/v3.1/all";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url)
      const data = await response.json();
      setCountries(data);
      setFilterCountry(data);
      setIsLoading(false)
      setError(null);
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [])

  const handleRemoveCountry = (name) => {
    const filter = filterCountry.filter((country) => country.name.common !== name)
    setFilterCountry(filter)
  }

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    })
    setFilterCountry(newCountries);
  }

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {countries && <Countris countries={filterCountry} onRemoveCountry={handleRemoveCountry} />}
    </>
  )
}

export default App

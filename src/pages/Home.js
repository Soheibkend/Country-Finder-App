import React, { useState, useEffect } from 'react';
import Countries from '../components/Countries';
import Header from '../components/Header';


const Home = ()=> {

  const [countries, setCountries] = useState([]);
  


  const fetchCountriesData = async () => {
      const response = await fetch ('https://restcountries.com/v3.1/all')
      const countries = await response.json();
      setCountries(countries);
  }

  const searchCountry = async (term) => {
    if (term ==='') return 
    const response = await fetch (`https://restcountries.com/v3.1/name/${term}`);
    if (response.ok) {
      const data = await response.json();
      setCountries(data);
    } else {
      throw Error('Could not fetch data')
      setCountries([]);
    }
    
  }

  const searchByRegion = async (region) => {
    if (region ==='Filter by region') return 
    const response = await fetch (`https://restcountries.com/v3.1/region/${region}`);
    const data = await response.json();
    setCountries(data);
  }

  useEffect (()=>{
      fetchCountriesData();
  },[])

 

    return (
        <>
          <Header/>
          <section className='filter'>
            <form className='form-control'>
                <input type='search'
                    placeholder='Search for a country'
                    name='search'
                    onChange= {(e)=> {searchCountry(e.target.value)}}
                >
                </input>
            </form>

            <div>
                <select name='select'
                  className='select'
                  onChange={(e)=> {searchByRegion(e.target.value)}}
                >
                    <option value='Filter by region'>Filter by region</option>
                    <option value='Africa'>Africa</option>
                    <option value='Europe'>Europe</option>
                    <option value='America'>America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Oceania'>Ocenia</option>
                </select>
            </div>
        </section>

      <div>
        
        <section className='grid'>
            <Countries countries={countries}/>
        </section>
      </div>

    </>
    
  );
}

export default Home;
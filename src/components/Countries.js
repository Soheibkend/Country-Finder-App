import React, { useEffect, useState } from 'react';

const url = 'https://restcountries.com/v3.1/all';

function Countries() {

    const [countries, setCountries] = useState([]);

    const fetchCountriesData = async () => {
        const response = await fetch (url);
        const countries = await response.json();
        setCountries(countries);
        console.log (countries);
    }

    useEffect (()=>{
        fetchCountriesData();
    },[])

  return (
    <div >
        
        <section className='grid'>
            {
            countries.map ((country)=> {
                const {name, population, region, capital, flags} = country;
                return (

                    <article key = {country.flag}>
                    <div className='card'>
                        <img src={flags.png} alt={name}></img>
                        <div className='details'>
                           <h3>{name.common}</h3>
                           <h5>Population : <span>{population}</span></h5>
                           <h5>Region : <span>{region}</span></h5>
                           <h5>Capital : <span>{capital}</span></h5>
                        </div>
                        
                    </div>

                    </article>
                    
                );
            })
            }
        </section>

        
    </div>
  )
}

export default Countries;
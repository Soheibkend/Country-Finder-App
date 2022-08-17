import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import Header from '../components/Header';

const Details = ()=> {

   
    const [country, setCountry] = useState([]);
    const {name} = useParams();

    const fetchcCountryData = async ()=> {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const country = await response.json();
        setCountry(country);
        console.log (country);
    }

    useEffect (()=>{
        fetchcCountryData();
    },[])

    return (
        <>
           <Header/>

           <div className='back-btn'>
               <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}> <i className="fa-solid fa-arrow-left-long"></i> Back </Link>
           </div>

           {
            country.map((c)=>{
                const {flags, population, area, region, subregion, capital, languages, currencies, borders, name} = c;
                return(
                    <div className='details-container' key={c.ccn3}>
                        <div>
                            <img src={flags.svg}></img>
                        </div>

                        <div>
                            <h2>{name.official}</h2>
                            <h4>Native name : <span>{name.common}</span></h4>
                            <h4>Area : {area}</h4>
                            <h4>Population : <span>{population}</span></h4>
                            <h4>Capital : <span>{capital}</span> </h4>
                            <h4>Region : <span>{region}</span></h4>
                            <h4>Sub region : <span>{subregion} </span></h4>
                            
                        </div>

                        <div>
                            <h4>
                                Currencies :  
                                {
                                    Object.keys(currencies).map((o)=>{
                                        return(
                                            <span key={currencies[o].name}>{` ${currencies[o].name}`}</span>
                                        )
                                    })
                                }
                            </h4>

                            <h4>
                                Languages : 
                                {
                                    Object.keys(languages).map((o)=>{
                                        return(
                                            <span key={languages[o]}>{ ` ${languages[o]} `}</span>
                                        )
                                    })
                                }
                            </h4>
                        </div>
                    </div>
                )
            })
           }

        </>
    )
}

export default Details;
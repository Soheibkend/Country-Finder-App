import React from "react";
import Card from "./Card";

const Countries = ({countries})=> {

    return(
        <>
        {
            countries.map ((country)=> {
                const {name, population, region, capital, flags} = country;
                return (
                  <Card key={flags.svg} name={name} population={population} region={region} capital={capital} flags={flags} />  
                );
            })
        }
        </>
    );
}

export default Countries;
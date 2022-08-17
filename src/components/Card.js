import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({name, population, region, capital, flags}) => {

    return (
        <article>
            <div className='card'>
                <Link to={`/countries/${name.common}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className='card'>
                        <img src={flags.png} alt={name}></img>
                        <div className='details'>
                            <h3>{name.common}</h3>
                            <h5>Population : <span>{population}</span></h5>
                            <h5>Region : <span>{region}</span></h5>
                            <h5>Capital : <span>{capital}</span></h5>
                        </div>
                    </div>
                </Link>
            </div>
        </article> 
    );
}

export default Card;
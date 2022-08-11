import React from 'react';


const Filter = ()=> {

    return (
        <section className='filter'>
            <form className='form-control'>
                <input type='search'
                    placeholder='Search for a country'
                    name='search'
                >
                </input>
            </form>

            <div>
                <select name='select'
                    className='select'
                >
                    <option value='Filter by region'>Filter by region</option>
                    <option value='Africa'>Africa</option>
                    <option value='Europe'>Europe</option>
                    <option value='America'>America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Ocenia'>Ocenia</option>
                </select>
            </div>
        </section>
    );
}

export default Filter;
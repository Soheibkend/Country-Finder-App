import React from 'react';

const Header = ()=> {

    return(
        <header className='header'>
            <div>
               <h2>Where in the world?</h2>
            </div>

            <div className='theme-header'>
                <i className="icon fa-solid fa-moon"></i>
                <h3>Dark Mode</h3>
            </div>
        </header>
    );
}

export default Header;
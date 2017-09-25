import React from 'react';
import Link from '../elements/Link';

const Header = () => (
    <div className='header-nav'>
        <header>
            <h1>Main</h1>
        </header>
        <nav>
            <Link to='/' activeClassName='active-nav'>Overview</Link>
        </nav>
    </div>
);

export default Header;

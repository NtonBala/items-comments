import React from 'react';
import Link from '../elements/Link';

const Header = () => (
    <header className='header-nav'>
        <h1>Main</h1>
        <nav>
            <Link to='/' activeClassName='active-nav'>Overview</Link>
        </nav>
    </header>
);

export default Header;

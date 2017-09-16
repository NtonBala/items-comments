import React from 'react';
import Link from '../elements/Link';

const Header = () => (
    <div>
        <header>Main</header>
        <nav>
            <Link to='/' activeClassName='active-nav'>Overview</Link>
        </nav>
    </div>
);

export default Header;

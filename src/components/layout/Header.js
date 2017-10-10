import React, {PropTypes} from 'react';

const Header = ({resetActiveId}) => (
    <header className='header-nav'>
        <h1>Main</h1>
        <nav>
            <a href='#' onClick={(e) => {
                e.preventDefault();
                resetActiveId();
            }}>Overview</a>
        </nav>
    </header>
);

Header.propTypes = {
    resetActiveId: PropTypes.func
};

export default Header;

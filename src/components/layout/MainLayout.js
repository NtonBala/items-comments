import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import ItemsContainer from '../../containers/ItemsContainer';
import CommentsContainer from '../../containers/CommentsContainer';

const MainLayout = () => (
    <div className='main-container'>
        <HeaderContainer/>
        <main className='content-container'>
            <div className='clearfix'>
                <ItemsContainer/>
                <CommentsContainer/>
            </div>
        </main>
    </div>
);

export default MainLayout;

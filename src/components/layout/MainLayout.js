import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import ItemsContainer from '../../containers/ItemsContainer';
import CommentsContainer from '../../containers/CommentsContainer';
import Message from '../widgets/Message';

const MainLayout = () => (
    <div className='main-container'>
        <HeaderContainer/>
        <div className='content-container'>
            {typeof(Storage) !== 'undefined' ?
                <div className='clearfix'>
                    <ItemsContainer/>
                    <CommentsContainer/>
                </div> :
                <Message/>
            }
        </div>
    </div>
);

export default MainLayout;

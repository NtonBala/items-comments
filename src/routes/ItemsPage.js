import MainLayout from '../components/layout/MainLayout';
import ItemsPage from '../components/ItemsPage';
import CommentsContainer from '../containers/CommentsContainer';
import {commentsPath} from '../helpers/routes/constants';
import {fetchItems} from '../actions/itemsActionCreators';
import {fetchActiveItem} from '../actions/activeItemActionCreators';

const CommentsRoute = {
    path: commentsPath(),
    component: CommentsContainer,
    prepareData: (store, query, params) => {
        store.dispatch(fetchActiveItem(params.item_id));
    }
};

const Index = {
    path: '/',
    component: ItemsPage,
    childRoutes: [
        CommentsRoute
    ],
    prepareData: (store, query, params, location) => {
        //check if first item should be active
        const isFirstActive = location.pathname === '/';

        store.dispatch(fetchItems(isFirstActive));
    }
};

export default {
    component: MainLayout,
    childRoutes: [
        Index
    ]
};

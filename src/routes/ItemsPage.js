import MainLayout from '../components/Root';
import ItemsPage from '../components/ItemsPage';
import CommentsContainer from '../containers/CommentsContainer';
import {commentsPath} from '../helpers/routes/constants';
import {fetchItems} from '../actions/itemsActionCreators';
import {fetchActiveItem} from '../actions/activeIdActionCreators';

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
        //if (location.pathname === '/') {
            store.dispatch(fetchItems());
        //}
    }
};

export default {
    component: MainLayout,
    childRoutes: [
        Index
    ]
};

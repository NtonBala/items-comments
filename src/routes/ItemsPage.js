import MainLayout from '../components/layout/MainLayout';
import ItemsPage from '../components/ItemsPage';
import Comments from '../components/widgets/Comments';
import {commentsPath} from '../helpers/routes/constants';
import {fetchItems} from '../actions/itemsActionCreators';
import {fetchComments} from '../actions/commentsActionCreators';

const CommentsRoute = {
    path: commentsPath(),
    component: Comments,
    prepareData: (store, query, params) => {
        store.dispatch(fetchComments(params.item_id));
    }
};

const Index = {
    path: '/',
    component: ItemsPage,
    childRoutes: [
        CommentsRoute
    ],
    prepareData: (store, query, params, location) => {
        if (location.pathname === '/') {
            store.dispatch(fetchItems());
        }
    }
};

export default {
    component: MainLayout,
    childRoutes: [
        Index
    ]
};

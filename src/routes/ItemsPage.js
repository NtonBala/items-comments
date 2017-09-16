import MainLayout from '../components/layout/MainLayout';
import ItemsPage from '../components/ItemsPage';
import Comments from '../components/widgets/Comments';
import {commentsPath} from '../helpers/routes';

const CommentsRoute = {
    path: commentsPath(),
    component: Comments
};

const Index = {
    path: '/',
    component: ItemsPage,
    childRoutes: [
        CommentsRoute
    ]
};

export default {
    component: MainLayout,
    childRoutes: [
        Index
    ]
};

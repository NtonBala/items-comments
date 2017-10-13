import {connect} from 'react-redux';
import {resetActiveId} from '../actions/activeIdActionCreators';
import Header from '../components/layout/Header';

const dispatchToProps = (dispatch) => ({
    resetActiveId: () => dispatch(resetActiveId())
});

const HeaderContainer = connect(null, dispatchToProps)(Header);

export default HeaderContainer;

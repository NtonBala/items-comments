import {connect} from 'react-redux';
import {resetActiveId} from '../actions/activeIdActionCreators';
import Header from '../components/layout/Header';

const mapDispatchToProps = (dispatch) => ({
    resetActiveId: () => dispatch(resetActiveId())
});

const HeaderContainer = connect(mapDispatchToProps)(Header);

export default HeaderContainer;

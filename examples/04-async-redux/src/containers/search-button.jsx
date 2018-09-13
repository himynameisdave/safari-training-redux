import { connect } from 'react-redux';
import Button from '../components/button.jsx';
import { search } from '../redux/actions/actions-async.js';
import { getIsSearching } from '../redux/selectors/index.js';


const mapStateToProps = (state) => ({
    disabled: getIsSearching(state),
    text: getIsSearching(state)
        ? 'Searching...'
        : 'Search'
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(search()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Button);

import { connect } from 'react-redux';
import Checkbox from '../components/checkbox.jsx';
import { toggleFullTime } from '../redux/actions/actions-sync.js';
import { getFullTime } from '../redux/selectors/index.js';


const mapStateToProps = (state) => ({
    checked: getFullTime(state),
});

const mapDispatchToProps = (dispatch) => ({
    onChange: () => dispatch(toggleFullTime()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Checkbox);

import { connect } from 'react-redux';
import Input from '../components/input.jsx';
import { updateLocation } from '../redux/actions/actions-sync.js';
import { getLocation } from '../redux/selectors/index.js';


const mapStateToProps = (state) => ({
    value: getLocation(state),
});

const mapDispatchToProps = (dispatch) => ({
    onInput: (e) => dispatch(updateLocation(e.target.value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Input);

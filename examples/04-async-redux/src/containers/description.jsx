import { connect } from 'react-redux';
import Input from '../components/input.jsx';
import { updateDescription } from '../redux/actions/actions-sync.js';
import { getDescription } from '../redux/selectors/index.js';


const mapStateToProps = (state) => ({
    value: getDescription(state),
});

const mapDispatchToProps = (dispatch) => ({
    onInput: (e) => dispatch(updateDescription(e.target.value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Input);

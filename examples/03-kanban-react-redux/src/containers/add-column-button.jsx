import { connect } from 'react-redux';
import Button from '../components/button.jsx';
import { addColumn } from '../redux/actions/action-creators.js'


const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(addColumn()),
});

export default connect(
    null, mapDispatchToProps
)(Button);

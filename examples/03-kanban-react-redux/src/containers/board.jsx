import { connect } from 'react-redux';
import Board from '../components/board.jsx';
import { getColumnIds } from '../redux/selectors/selectors.js';


const mapStateToProps = (state) => ({
    columns: getColumnIds(state),
});

export default connect(
    mapStateToProps,
    null,
)(Board);

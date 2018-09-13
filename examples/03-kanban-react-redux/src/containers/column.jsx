import { connect } from 'react-redux';
import Column from '../components/column.jsx';
import {
    addCard,
    deleteColumn,
    updateColumnTitle
} from '../redux/actions/action-creators.js';
import { getColumnTitle, getColumnCardIds } from '../redux/selectors/selectors.js';


const mapStateToProps = (state, ownProps) => ({
    title: getColumnTitle(state, ownProps.id),
    cards: getColumnCardIds(state, ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAddCard: () => dispatch(addCard(ownProps.id)),
    onDeleteColumn: () => dispatch(deleteColumn(ownProps.id)),
    onUpdateColumnTitle: (title) => dispatch(updateColumnTitle(ownProps.id, title)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Column);

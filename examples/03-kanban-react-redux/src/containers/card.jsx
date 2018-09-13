import { connect } from 'react-redux';
import Card from '../components/card.jsx';
import { deleteCard, moveCard, updateCardText } from '../redux/actions/action-creators.js';
import { getCardText } from '../redux/selectors/selectors.js';


const mapStateToProps = (state, ownProps) => ({
    text: getCardText(state, ownProps.columnId, ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDeleteCard: () => dispatch(deleteCard(ownProps.columnId, ownProps.id)),
    onMoveCard: () => dispatch(moveCard(ownProps.columnId, ownProps.id)),
    onUpdateCardText: (text) => dispatch(updateCardText(ownProps.columnId, ownProps.id, text)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card);

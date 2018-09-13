import { connect } from 'react-redux';
import Results from '../components/results.jsx';
import { getResults } from '../redux/selectors/index.js';


const mapStateToProps = (state) => ({
    results: getResults(state),
});

export default connect(
    mapStateToProps,
    null,
)(Results);

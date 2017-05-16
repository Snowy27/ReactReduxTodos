import {connect} from 'react-redux';
import LinksList from '../components/linksList';
import {changeVisibility} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (event, value) => {
            event.preventDefault();
            dispatch(changeVisibility(value));
        }
    };
};

const mapStateToProps = (state) => {
    return {};
};

const Filters = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinksList);

export default Filters;

import {connect} from 'react-redux';
import InputField from '../components/inputField';
import {addTodo, changeInput} from '../actions';

const mapStateToProps = (state) => {
    return {
        currentInput: state.newTodo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (event, title) => {
            event.preventDefault();
            dispatch(addTodo(title));
        },
        onChange: (event) => {
            dispatch(changeInput(event.target.value));
        }
    };
};

const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputField);

export default AddTodo;

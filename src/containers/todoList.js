import {connect} from 'react-redux';
import List from '../components/list';
import {toggleTodo, deleteTodo} from '../actions';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDoneClick: (id) => {
            dispatch(toggleTodo(id));
        },
        onRemoveClick: (id) => {
            dispatch(deleteTodo(id));
        }
    };
};

const TodoList = connect (
    mapStateToProps,
    mapDispatchToProps
)(List);

export default TodoList;

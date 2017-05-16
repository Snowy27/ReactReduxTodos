import {connect} from 'react-redux';
import List from '../components/list';
import {toggleTodo, deleteTodo} from '../actions';

const calculateFilteredTodos = (todos, visibility) => {
    if (visibility === 'ALL') {
        return todos;
    }
    if (visibility === 'OPENED') {
        return todos.filter((todo) => !todo.done);
    }
    if (visibility === 'CLOSED') {
        return todos.filter((todo) => todo.done);
    }
};

const mapStateToProps = (state) => {
    return {
        todos: calculateFilteredTodos(state.todos, state.filters.visibility)
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

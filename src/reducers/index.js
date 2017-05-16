import {combineReducers} from 'redux';
import todos from './todos';
import newTodo from './newTodo';

const Reducer = combineReducers({
    todos,
    newTodo
});

export default Reducer;

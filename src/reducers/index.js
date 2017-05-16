import {combineReducers} from 'redux';
import todos from './todos';
import newTodo from './newTodo';
import filters from './filters';

const Reducer = combineReducers({
    todos,
    newTodo,
    filters
});

export default Reducer;

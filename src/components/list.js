import React from 'react';
import Todo from './todo';
import PropTypes from 'prop-types'

const List = ({todos, onDoneClick, onRemoveClick}) => (
    <ul className="todo-list">
        {todos.map((todo, index) =>
                <Todo
                    key={todo.id}
                    todo={todo}
                    index={index}
                    onDoneClick={onDoneClick}
                    onRemoveClick={onRemoveClick}/>
        )}
    </ul>
);

List.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        done: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onDoneClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}

export default List;

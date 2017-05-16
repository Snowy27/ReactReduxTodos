import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({index, todo, onDoneClick, onRemoveClick}) => (
    <li key={todo.id}
        className={todo.done ? 'completed' : ''}>
        <div className="view">
            <input
                className="toggle"
                checked={todo.done}
                type="checkbox"
                onClick={() => onDoneClick(todo.id)}/>
            <label>
                {index+1}. {todo.title}
            </label>
            <button
                className="destroy"
                onClick={() => onRemoveClick(todo.id)}/>
        </div>
    </li>
);

Todo.propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.shape({
        done: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    onDoneClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}

export default Todo;

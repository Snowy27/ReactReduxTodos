import React from 'react';
import Todo from './todo';

export default function (props) {
    return (
        <ul className="todo-list">
            {props.todos.map((todo, index) =>
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        onDoneClick={props.onDoneClick}
                        onRemoveClick={props.onRemoveClick}/>
            )}
        </ul>
    );
}

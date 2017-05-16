import React from 'react';

export default function Todo (props) {
    return (
        <li key={props.index}
            className={props.todo.done ? 'completed' : ''}>
            <div className="view">
                <input
                    className="toggle"
                    checked={props.todo.done}
                    type="checkbox"
                    onClick={() => props.onDoneClick(props.index)}/>
                <label>
                    {props.index+1}. {props.todo.title}
                </label>
                <button
                    className="destroy"
                    onClick={() => props.onRemoveClick(props.index)}/>
            </div>
        </li>
    );
}

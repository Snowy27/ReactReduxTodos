import React from 'react';

export default function InputField (props){
    return (
        <form onSubmit={(event) => props.onSubmit(event)}>
            <input
                className="new-todo"
                type="text"
                placeholder="What needs to be done?"
                value={props.currentInput}
                onChange={(event) => props.onChange(event)} />
        </form>
    );
}

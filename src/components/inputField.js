import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({currentInput, onSubmit, onChange}) => (
    <form onSubmit={(event) => onSubmit(event, currentInput)}>*
        <input
            className="new-todo"
            type="text"
            placeholder="What needs to be done?"
            value={currentInput}
            onChange={(event) => onChange(event)} />
    </form>
);

InputField.propTypes = {
    currentInput: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}


export default InputField;

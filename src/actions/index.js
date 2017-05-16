let todoId = 0;

export const addTodo = (title) => {
    return {
        type: 'ADD_TODO',
        id: todoId++,
        title: title
    };
};

export const toggleTodo = (index) => {
    return {
        type: 'TOGGLE_TODO',
        id: index
    };
};

export const changeInput = (value) => {
    return {
        type: 'CHANGE_INPUT',
        value: value
    };
};

export const deleteTodo = (index) => {
    return {
        type: 'DELETE_TODO',
        id: index
    };
};

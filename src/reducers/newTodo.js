const newTodo = (state = '', action) => {
    switch (action.type){
        case 'CHANGE_INPUT':
            return action.value;
        case 'ADD_TODO':
            return '';
        default:
            return state;
    }
};

export default newTodo;

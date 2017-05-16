const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    done: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return Object.assign({}, todo, {
                    done: !todo.done
                });
            });
        case 'DELETE_TODO':
            return state.filter((todo) => {
                return todo.id !== action.id
            })
        default:
            return state
    }
};

export default todos

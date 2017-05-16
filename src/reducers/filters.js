const Filters = (state = {visibility: 'ALL'}, action) => {
    switch (action.type) {
        case 'CHANGE_VISIBILITY':
            return Object.assign({}, state, {
                visibility: action.visibility
            });
        default:
            return state;
    }
};

export default Filters;

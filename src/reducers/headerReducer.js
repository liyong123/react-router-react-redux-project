const defaultState = {
    collapsed:false
};

const headerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_COLLAPSED':
            return {
                ...state,
                collapsed:action.collapsed
            };
        default:
            return state
    }
};

export default headerReducer
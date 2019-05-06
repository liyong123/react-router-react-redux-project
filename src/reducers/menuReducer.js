const defaultState = {
  menuData:[]
};

const menuReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_MENU_DATA':
            return {
                ...state,
                menuData:action.res
            };
        default:
            return state
    }
};

export default menuReducer
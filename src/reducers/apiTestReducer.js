const defaultState = {
  getReqValue:'',
  getJsonReqValue:{}
};
const apiTestReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'GET_REQ_VALUE':
            return {
                ...state,
                getReqValue: action.res
            };
        case 'GET_JSON_REQ_VALUE':
            return {
                ...state,
                getJsonReqValue:action.res
            };
        default:
            return defaultState;
    }
};
export default apiTestReducer
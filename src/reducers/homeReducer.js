/*import merge from 'lodash/merge';*/

const defaulteState = {
   form: {
       age: '',
       job: ''
   },
   characters: []
};

const homeReducer = (state = defaulteState, action ) => {
    switch(action.type){
        case 'FORMITEM_VALUE_CHANGE':
            /*return merge({}, state, {form: {[action.name]: action.value}});*/
            return {
                ...state,
                form:{
                    ...state.form,
                    [action.name]: action.value,
                }
            };
        case 'CLEAR_FORMITEM_VALUE':
            return {
                ...state,
                form:{
                    age: '',
                    job: ''
                }
            };
        case 'SET_CHARACTERS':
            return {
                ...state,
                characters:[
                    ...state.characters,
                    action.character
                ]
            };
        case 'REMOVE_ONE_CHARACTER':
            return {
                ...state,
                characters:action.characters.filter((item, i)=> {
                    return i !== action.index
                })
            };
        default:
            return defaulteState
    }

};

export default homeReducer
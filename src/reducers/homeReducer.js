/*import merge from 'lodash/merge';*/

const defaulteState = {
   ageJobForm: {
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
                ageJobForm:{
                    ...state.ageJobForm,
                    [action.name]: action.value,
                }
            };
        case 'CLEAR_FORMITEM_VALUE':
            return {
                ...state,
                ageJobForm:{
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
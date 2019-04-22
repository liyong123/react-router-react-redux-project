//此middleware 记录 dispatch 的 action 和得到的新 state 。
const logger = store => next => action => {
    /*console.log(action.type);
    console.info("dispatching:", action);*/
    let result;
    try{
        result = next(action);
    } catch(ex) {
        console.log(ex);
    }

   /* console.log("next state", store.getState());
    console.groupEnd();*/
    return result
};

export default logger
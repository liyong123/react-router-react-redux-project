import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
/*import { createLogger } from 'redux-logger'*/
import { composeWithDevTools } from 'redux-devtools-extension'
import monitorReducersEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

const configureStore = (preloadedState) => {

    const middlewares = [loggerMiddleware, thunkMiddleware];
    /*if(process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger())//记录action及state
    }*/
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);
    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    /*reducer 热加载*/
    /*if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }*/

    return store;


};

export default configureStore

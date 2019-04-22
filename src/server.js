import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import reducersAll from './reducers'
import Layout  from './component/Layout'

const app = Express();
const port = 3001;

//每当收到请求时都会触发
app.use(handleRender);

function handleRender(req, res) {
    //创建新的 Redux store 实例
    const store = createStore(reducersAll);
    //把组件渲染成字符串
    const html = renderToString(
        <Provider store={store}>
            <Layout/>
        </Provider>
    );
    //从store中获得初始state
    const preLoadedState = store.getState();


}

function renderFullPage(html, preloadedState) {

}

app.listen(port);

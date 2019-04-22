import React ,{Component} from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import Layout from './component/Layout.js';
import NoMatch from './component/NoMatch.js';
import AddTodo from './containers/AddTodo/AddTodo.js';
import Home from './containers/Home/Home.js';
import Detail from './containers/Detail/Detail.js';
import ApiTest from './containers/ApiTest/ApiTest'

class Router extends  Component {
    render () {
        const { store } = this.props;
        return (
            <BrowserRouter>
                <Switch>
                    <Provider  store={store}>
                        <Route path="/" render={props => (
                            <Layout >
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route exact path='/detail' component={Detail} />
                                    <Route exact path='/detail/:id' component={Detail} />
                                    <Route exact path='/addToDo/:filter?' component={AddTodo} />
                                    <Route exact path='/ApiTest' component={ApiTest} />
                                    {/*<Route render={() => <Redirect to="/" />} />*/}
                                    <Route exact component={NoMatch} />
                                </Switch>
                            </Layout>
                        )}
                        />
                    </Provider>
                    {/*当路由错误时，返回"/"路由*/}
                   {/* <Route render={() => <Redirect to="/" />} />*/}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router
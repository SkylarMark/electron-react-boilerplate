import React from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';

/**
 * Imports of React Main Compoenents
 */
import App from './main/main.app';
import Test from './main/main.test';

/**
 * Router for React
 * @constant {Routes}
 */
const Routes = () => (
    <Switch>
        <Route path='/' exact component={App} />
        <Route path='/test' component={Test} />
    </Switch>
)

/**
 * Check if the environment is Development or Not
 * If Development use BrowserRouter
 * If Not use HashRouter
 * 
 * BrowserRouter is for URL
 * HashRouter is for File System
 * 
 * @returns {React-Router-Type}
 */
function ReactRoutes() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
       return   <BrowserRouter>
                    <Routes />
                </BrowserRouter>
    } else {
        return  <HashRouter>
                    <Routes />
                </HashRouter>
    }
}

export default ReactRoutes
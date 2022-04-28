import React from 'react';
import { HashRouter, Route, BrowserRouter, Routes as MainRoutes } from 'react-router-dom';

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
    <MainRoutes>
        <Route path='/' element={<App />} />
        <Route path='/test' element={<Test />} />
    </MainRoutes>
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
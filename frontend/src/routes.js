import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Login} path="/Login"/>
        </BrowserRouter>
    );
}

export default Routes;
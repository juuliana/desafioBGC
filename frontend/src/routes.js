import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact/>
                <Route component={Login} path="/Login"/>
                <Route component={ShoppingCart} path="/ShoppingCart"/>      
            </Switch>
        </BrowserRouter>
    );
}
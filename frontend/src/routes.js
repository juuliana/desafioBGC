import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login&Register/login';
import Register from './pages/Login&Register/register';
import ShoppingCart from './pages/ShoppingCart';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact/>
                <Route component={Login} path="/Login"/>
                <Route component={Register} path="/Register"/>
                <Route component={ShoppingCart} path="/ShoppingCart"/>      
            </Switch>
        </BrowserRouter>
    );
}
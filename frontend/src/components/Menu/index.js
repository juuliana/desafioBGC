import React from 'react';
import { Nav, NavLink } from './styles';

export default function Menu(){
    return(
        <Nav>
            <NavLink to='/'>
                HOME
            </NavLink>
            <NavLink to='/Login'>
                LOGIN
            </NavLink>
            <NavLink to='/carrinho'>
                CARRINHO
            </NavLink>
        </Nav>
    );
}
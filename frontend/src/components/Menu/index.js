import React from 'react';
import { Nav, NavLink } from './styles';

export default function Menu(){
    return(
        <Nav>
            <NavLink to='/'>
                Home    
            </NavLink>
            <NavLink to='/Login'>
                Login
            </NavLink>
            <NavLink to='/ShoppingCart'>
                Carrinho
            </NavLink>
        </Nav>
    );
}
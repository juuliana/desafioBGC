import React from 'react';
import { MdHome, MdShoppingCart } from 'react-icons/md';
import { Nav, NavLink } from './styles';

export default function Menu(){
    return(
        <Nav>
            <NavLink to='/'>
                <MdHome size={40} color= "var(--yellow)"/>
            </NavLink>
            
            <NavLink to='/ShoppingCart'>
                <MdShoppingCart size={40} color= "var(--white)"/>
            </NavLink>
        </Nav>
    );
}
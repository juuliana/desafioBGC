import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
    background-color: var(--background); 
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 8px solid var(--blue);
`;

export const NavLink = styled(Link)`
    display: flex;
    color: var(--white);
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
`;
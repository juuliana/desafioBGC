import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Header = styled.div`
    margin: 0;
    min-height: 86.6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
`;

export const Container = styled.div`
  padding: 30px;
  background: var(--white);
  border-radius: 20px;
`;

export const Footer = styled.footer`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

export const NavLink = styled(Link)`
  max-width: 100%;
  padding: 11px 13px;
  color: var(--white);
  font-weight: 600;
  text-transform: uppercase;
  background: var(--blue);
  border: none;
  text-decoration: none;
  border-radius: 20px;
  outline: 0;
  cursor: pointer;
  transition: 0.6s;
  animation: ease-in-out;

  :hover{
    transform: scale(0.9);
    box-shadow: 0 0 10 0;
  }
`;

export const Products = styled.table`
  width: 100%;
  th {
    color: var(--blue);
    text-transform: uppercase;
  }
  
  td {
    padding: 15px;
    vertical-align: middle;
  }
  img {
    height: 100px;
  }
  strong {
    color: var(--background);
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: var(--background);
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background: none;
  border: 0;
  padding: 6px;
  cursor: pointer;
`;

export const Price = styled.div`
  display: flex;

  span {
    font-weight: bold;
    color: var(--blue);
  }

  strong {
    font-size: 20px;
    margin-left: 10px;
  }
`;
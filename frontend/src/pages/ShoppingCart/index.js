import React, { Component } from 'react';
import { ContextData } from '../../components/Context';
import { Container, Header, Footer, NavLink, Products, List, Button, Price } from './styles';

import { MdRemoveCircle, MdAddCircle, MdRemoveShoppingCart} from 'react-icons/md';

import Menu from '../../components/Menu';

export class ShoppingCart extends Component {
    static contextType = ContextData;

    render(){
        const {shoppingCart, removeShoppingCart, add, remove} = this.context;

        return (  
            <>
                <Menu/>
                <Header>
                    <Container>
                        <Products>  
                            <tr>
                                <th>Produtos no carrinho</th>
                            </tr>
                            {
                                shoppingCart.map(item =>(
                                    <List key={item.id} >  
                                        <tr>
                                            <td>
                                                <List>
                                                    <Button className="count" onClick={() => remove(item.id)}>
                                                        <MdRemoveCircle size={30} color= "var(--blue)"/>
                                                    </Button>
                                                    <span>{item.count}</span>
                                                    <Button className="count" onClick={() => add(item.id)}>
                                                        <MdAddCircle size={30} color= "var(--blue)"/>
                                                    </Button>
                                                </List>
                                            </td>
                                            <td>
                                                <img src={item.src} alt="ImageProduct"/>
                                            </td>
                                            <td>
                                                <strong>{item.title}</strong>
                                                <span>R${item.price * item.count}</span>
                                            </td>
                                            <td>
                                                <Button onClick={() => removeShoppingCart(item.id)}>
                                                    <MdRemoveShoppingCart size={30} color="var(--blue)"/>
                                                </Button>
                                            </td>
                                        </tr>
                                    </List>
                                ))
                            }
                            <Footer>
                                <Price>
                                    <span>Valor Total</span>
                                    <strong>R$</strong>
                                </Price>
                                <NavLink to="/Login" type="button">Quero reservar</NavLink>
                            </Footer>
                        </Products>
                    </Container>
                </Header>
            </>
        );
    }
 
}

export default ShoppingCart;
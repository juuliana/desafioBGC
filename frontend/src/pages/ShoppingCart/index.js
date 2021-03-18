import React, { Component } from 'react';
import { ContextData } from '../../components/Context';
import { Container, Header, Products, Price } from './styles';

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
                            <thead>
                                <tr>
                                    <th>Produtos no carrinho</th>
                                </tr>
                            </thead>
                            
                            {
                                shoppingCart.map(item =>(
                                    <div key={item.id} >
                                                
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <button className="count" onClick={() => remove(item.id)}>
                                                            <MdRemoveCircle size={20} color= "var(--yellow)"/>
                                                        </button>
                                                        <span>{item.count}</span>
                                                        <button className="count" onClick={() => add(item.id)}>
                                                            <MdAddCircle size={20} color= "var(--yellow)"/>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src={item.src} alt="ImageProduct"/>
                                                </td>
                                                <td>
                                                    <strong>{item.title}</strong>
                                                    <span>R${item.price * item.count}</span>
                                                </td>
                                                <td>
                                                    <div onClick={() => removeShoppingCart(item.id)}>
                                                        <MdRemoveShoppingCart size={20} color="var(--blue)"/>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </div>
                                ))
                            }
                            <footer>
                                <Price>
                                    <span>Valor Total</span>
                                    <strong>R$</strong>
                                </Price>
                                <button type="button">Finalizar reserva</button>
                            </footer>
                        </Products>
                    </Container>
                </Header>
            </>
        );
    }
 
}

export default ShoppingCart;
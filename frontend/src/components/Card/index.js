import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ContextData } from '../../components/Context';
import { Container, Header, ProductsGrid, ContainerImage, Image, Information, Title, Description, Button, Price } from './styles';

export class Card extends Component{

    static contextType = ContextData;

    render(){
        const {products} = this.context;

        return(
            <Header>
                <ProductsGrid>
                    {
                        products.map(product => (
                            
                            <Container key={product.id}>
                                <ContainerImage to={`/product/${product.id}`}>
                                    <Image src={product.src} alt='minions'/>
                                </ContainerImage>
                            
                                <Information>
                                    <Title to={`/product/${product.id}`}>
                                        <h2>{product.title}</h2>
                                    </Title>
                                    <Description to={`/product/${product.id}`}>
                                        <p>{product.description}</p>
                                    </Description>
                                    <Price to={`/product/${product.id}`}>
                                        <p>R${product.price}</p>
                                    </Price>
                                </Information>
                            
                                <Button onClick={()=> this.context.addShoppingCart(product.id)} as={Link} to="/ShoppingCart">Adicionar ao carrinho</Button>
                            </Container>  
                        ))
                    }
                </ProductsGrid>
            </Header>
        )
    }
}

export default Card;
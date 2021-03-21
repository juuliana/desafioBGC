import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { ContextData } from '../Context';
import { Container, Header, ProductsGrid, ContainerImage, Image, Information, Title, Description, Button, Price } from './styles';

export class Products extends Component{

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
                            
                                <Button onClick={()=> this.context.addShoppingCart(product.id)} as={Link} to="/ShoppingCart">
                                    <MdShoppingCart size={30} color= "var(--blue)"/>
                                </Button>
                            </Container>  
                        ))
                    }
                </ProductsGrid>
            </Header>
        )
    }
}

export default Products;
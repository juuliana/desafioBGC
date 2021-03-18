import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ContainerImage, Image, Information, Title, Description, Button, Price } from './styles';

export default function Card({title, imageUrl, body, price}){
    return(
        <Container>
            <ContainerImage>
                <Image src={imageUrl} alt='minions'/>
            </ContainerImage>

            <Information>
                <Title>
                    <h2>{title}</h2>
                </Title>
                <Description>
                    <p>{body}</p>
                </Description>
                <Price>
                    <p>{price}</p>
                </Price>
            </Information>

            <Button as={Link} to="/ShoppingCart">Adicionar ao carrinho</Button>
        </Container>
    );
}
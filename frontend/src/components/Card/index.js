import React from 'react';
import { Container, ContainerImage, Image, Information, Title, Description, Button } from './styles';

export default function Card({title, imageUrl, body}){
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
            </Information>

            <Button>Adicionar ao carrinho</Button>
        </Container>
    );
}
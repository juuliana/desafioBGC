import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--yellow);
    margin-left: 10%;
    width: 250px;
    overflow: hidden;
    border-radius: 20px;
    border: 5px solid var(--blue);
    transition: 0.5s;
    animation: ease-in-out;

    :hover{
        transform: scale(1.2);
        box-shadow: 0 0 15 0;
    }
`;

export const Header = styled.div`
    background-color: var(--background);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const ProductsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1500px;
    padding: 50px;
    margin-left: 5%;
    grid-gap: 20px;
`;

export const ContainerImage = styled.div`
    overflow: hidden;
    height: 250px;
`;


export const Image = styled.img`
    max-width: 250px;
    max-height: 250px;
`;

export const Information = styled.div`
    margin: 1rem;
    margin-top: 0.5rem;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 15px;
`;

export const Description = styled.h2`
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 15px;
`;

export const Price = styled.h2`
    margin-bottom: 0.5rem;
    font-size: 15px;
    text-align: center;
`;

export const Button = styled.button`
    display: flex;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    transition: 0.6s;
    animation: ease-in-out;

    :hover{
        transform: scale(1.5);
        box-shadow: 0 0 10 0;
    }
`;
import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--yellow);
    margin-left: 10%;
    width: 250px;
    overflow: hidden;
    box-shadow: 0 0 15 -5;
    transition: 0.5s;
    animation: ease-in-out;

    :hover{
        transform: scale(1.2);
        box-shadow: 0 0 15 0;
    }
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

export const Button = styled.button`
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0.rem;
    color: white;
    border: 1px solid var(--blue);
    transition: 0.6s;
    animation: ease-in-out;

    :hover{
        transform: scale(1.1);
        box-shadow: 0 0 10 0;
    }
`;

export const Price = styled.h2`
    margin-bottom: 0.5rem;
    font-size: 15px;
    text-align: center;
`;
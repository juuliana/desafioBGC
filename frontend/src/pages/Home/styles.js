import styled from 'styled-components';

export const Header = styled.div`
    margin: 0;
    background-color: var(--background);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Description = styled.h1`
    color: var(--white);
    position: absolute;
    width: 400px;
    height: 100px;
    right: 60%;
    top: 30%;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 43px;
`;

export const Image = styled.img`
    position: absolute;
    width: 600px;
    height: 350px;
    left: 50%;
    top: 40%;
`;
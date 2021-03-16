import styled from 'styled-components';

export const Header = styled.div`
    margin: 0;
    background-color: #231F20;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Description = styled.h1`
    color: white;
    position: absolute;
    width: 400px;
    height: 129px;
    right: 60%;
    top: 30%;

    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 43px;
`;

export const Image = styled.img`
    position: absolute;
    width: 550px;
    height: 329px;
    left: 50%;
    top: 30%;
`;
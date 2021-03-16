import styled from 'styled-components';

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
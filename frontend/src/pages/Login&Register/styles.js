import styled from 'styled-components';

export const Header = styled.div`
    margin: 0;
    background-color: var(--background);
    min-height: 86.6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Form = styled.form`
    margin: 0 auto;
    width: 100%;
    max-width: 414px;
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Input = styled.input`
    max-width: 100%;
    padding: 11px 13px;
    background: var(--white);
    color: var(--blue);
    margin-bottom: 1.6rem;
    border-radius: 4px;
    outline: 0;
    border: 1px solid white;
    font-size: 14px;
`;

export const Button = styled.button`
    max-width: 100%;
    padding: 11px 13px;
    color: rgb(253, 249, 243);
    font-weight: 600;
    text-transform: uppercase;
    background: var(--blue);
    border: none;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    transition: 0.6s;
    animation: ease-in-out;

    :hover{
        transform: scale(0.9);
        box-shadow: 0 0 10 0;
    }
`;
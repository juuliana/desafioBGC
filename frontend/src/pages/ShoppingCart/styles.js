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

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 20px;
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
    text-transform: uppercase;

    button {
      background: var(--blue);
      color: #fff;
      border: 0;
      border-radius: 20px;
      padding: 12px;
      font-weight: bold;
      text-transform: uppercase;
      transition: var(--blue) 1.0s;
      &:hover {
        background: var(--yellow);
      }
    }
  }
`;

export const Products = styled.table`
  width: 100%;
  th {
    color: var(--blue);
    text-transform: uppercase;
    padding: 10px;
  }
  
  td {
    padding: 15px;
    vertical-align: middle;
  }
  img {
    height: 100px;
  }
  strong {
    color: var(--background);
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: var(--background);
  }
  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid var(--gray);
      border-radius: 4px;
      color: var(--background);
      padding: 6px;
      width: 40px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Price = styled.div`
  display: flex;

  span {
    font-weight: bold;
    color: var(--blue);
  }

  strong {
    font-size: 20px;
    margin-left: 10px;
  }

`;
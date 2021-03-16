import React from 'react';
import { Header, ProductsGrid } from './styles';
import Card from '../../components/Card';

import minions from '../../images/product1.jpg';

function Products() {

  return (
    <Header>
      <ProductsGrid>
        <Card
          title='Minions remoto'
          imageUrl={minions}
          body='Leve já o seu minions remoto!'
        />
        <Card
          title='Minions remoto'
          imageUrl={minions}
          body='Leve já o seu minions remoto!'
        />
        <Card
          title='Minions remoto'
          imageUrl={minions}
          body='Leve já o seu minions remoto!'
        />
      </ProductsGrid>
    </Header>
  );
}

export default Products;
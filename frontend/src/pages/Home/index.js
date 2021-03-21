import React from 'react';
import { Header, Description, Image } from './styles';

import minions from '../../images/minions.png';
import Products from '../../components/Products';
import Menu from '../../components/Menu';

function Home() {
  return (
    <>
      <Header>
        <Menu/>

        <Description>
          Faça já a reserva do seu <text style={{color: 'var(--yellow)'}}>Boneco Minions</text> em miniatura!
        </Description>

        <Image src={minions}></Image>
      </Header>

      <Products/>
    </>
  );
}

export default Home;
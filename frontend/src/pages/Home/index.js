import React from 'react';
import { Header, Description, Image } from './styles';
import minions from '../../images/minions.png';

function Home() {
  return (
    <Header>
        <Description>
            FAÇA JÁ A RESERVA DO SEU <text style={{color: '#FCE029'}}>BONECO MINIONS</text> EM MINIATURA!
        </Description>

        <Image src={minions}></Image>
    </Header>
  );
}

export default Home;
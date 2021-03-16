import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Header, Description, Image } from './styles';
import minions from '../../images/minions.png';
import Products from '../Products';
import Menu from '../../components/Menu';

function Home() {
  return (
    <>
      <Router>
        <Menu/>
      </Router>

      <Header>
        <Description>
          FAÇA JÁ A RESERVA DO SEU <text style={{color: '#FCE029'}}>BONECO MINIONS</text> EM MINIATURA!
        </Description>

        <Image src={minions}></Image>
      </Header>

      <Products/>
    </>
  );
}

export default Home;
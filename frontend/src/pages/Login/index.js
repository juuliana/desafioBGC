import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Menu from '../../components/Menu';

import { Header, Title, Form, Input, Button } from './styles';

function Login() {
  return (
    <>
      <Router>
        <Menu/>
      </Router>

      <Header>
        <Title>Faça seu acesso por aqui</Title>

        <Form>
            <Input
                type="email"
                name="email"
            />
            <Input
                type="email"
                name="email"
            />
            <Button>Entrar</Button>
        </Form>
       
      </Header>
    </>
  );
}

export default Login;
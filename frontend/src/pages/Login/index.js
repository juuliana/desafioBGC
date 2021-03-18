import React from 'react';
import { Header, Title, Form, Input, Button } from './styles';

import Menu from '../../components/Menu';

function Login() {
  return (
    <>
      <Menu/>

      <Header>
        <Title>Faça seu acesso por aqui</Title>

        <Form>
            <Input
                type="email"
                name="email"
            />
            <Input
                type="password"
                name="password"
            />
            <Button>Entrar</Button>
        </Form>
       
      </Header>
    </>
  );
}

export default Login;
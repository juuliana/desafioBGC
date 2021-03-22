import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import UserPool from '../../UserPool';

import { Header, Form, Input, Button, Title } from './styles';
import Menu from '../../components/Menu';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) =>{
      if (err) console.error(err);
      history.push('/Login');
    });
  };

  return (
    <>
      <Menu/>

      <Header>
        <Form onSubmit={onSubmit}>
          <Title to="/Register">Faça já o seu cadastro</Title>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="Digite seu e-mail"       
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Digite uma senha"
          />
          <Button type="submit">Cadastrar-se</Button>
        </Form>
      </Header>
    </>
  );
}

export default Register;
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { MdArrowForward } from 'react-icons/md';

import UserPool from '../../UserPool';

import { Header, Form, Input, Text, Button, Title } from './styles';
import Menu from '../../components/Menu';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const onSubmit = event => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    }); 

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log('Success:', data);
        alert("Usuário logado com sucesso!");
        history.push('/');
      },

      onFailure: err => {
        console.error('Failure:', err);
        alert("E-mail e senha incorretos!");
      },

      newPasswordRequired: data => {
        console.log('newPasswordRequired', data);
        alert("Digite uma senha válida");
      }
    });
  };

  return (
    <>
      <Menu/>

      <Header>
        <Form onSubmit={onSubmit}>
          <Title to="/Register">Faça seu Login</Title>
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
            placeholder="Digite sua senha"
          />
          <Button type="submit">Acessar e finalizar reserva</Button>
          <Text to="/Register">
            Quero me cadastrar
            <MdArrowForward size={20} color="var(--white)"/>
          </Text>
        </Form>
      </Header>
    </>
  );
}

export default Login;
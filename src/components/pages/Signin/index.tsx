import React from 'react'

import { Container, Logo, Form, FormTitle } from './style';
import LogoImg from '../../../assets/sade.jpg';

const SignIn: React.FC = () => {
  return (
<Container>
<Logo>
<img src={LogoImg} alt="logo dashboard"/>
<h1>Dashboard Blaze</h1>

</Logo>
<Form>
  <FormTitle>Entrar</FormTitle>
  <input type="text"></input>
  <input type="text"></input>
<button type="submit" >Acessar</button>

</Form>
</Container>
 
  );
}

export default SignIn;
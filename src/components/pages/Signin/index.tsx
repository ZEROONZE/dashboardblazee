import React, {useState} from 'react'

import { Container, Logo, Form, FormTitle } from './style';
import LogoImg from '../../../assets/sade.jpg';
import Input from '../../Input';
import Button from '../../Button';
import { useAuth } from '../../hooks/auth';
const SignIn: React.FC = () => {
const [login, setLogin] = useState<string>('');
const [password, setPassword] = useState<string>('');
const {signIn} = useAuth();

  return (
<Container>
 
<Logo>
<img src={LogoImg} alt="logo dashboard"/>
<h1>Dashboard Blaze</h1>

</Logo>
<Form onSubmit={() => signIn(login, password)}>
  <FormTitle>Entrar</FormTitle>

 <Input
 placeholder='Login'
 required
 onChange={(e) => setLogin(e.target.value)}
 />
 <Input
 type="password"
 required
 placeholder='Senha'
 onChange={(e) => setPassword(e.target.value)}
 />
<Button type='submit'>Acessar</Button>

</Form>
</Container>
 
  );
}

export default SignIn;
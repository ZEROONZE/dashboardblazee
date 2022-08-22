import React, {useMemo, useState} from 'react';

import { Container, Profile, Welcome, UserName  } from './styles';
import emojis from '../../Utils/emojis';
import Toggle from '../Toggle';
import { useTheme } from '../../components/hooks/theme';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { FcExport } from 'react-icons/fc';
const MainHeader: React.FC = () => {
 
  const { signOut } = useAuth();
  const {toggleTheme, theme} = useTheme();
 const [darkTheme, setDarkTheme] = useState (() => theme.title === 'dark' ? true : false);
 
const handleChangeTheme = () => {
  setDarkTheme(!darkTheme);
  toggleTheme();





}

  const emoji  = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);

   return emojis[indice];



  }, []);




  return (
<Container>
  <Toggle 

   labelLeft="Light"
   labelRight="Dark" 
  checked={darkTheme}
  onChange={handleChangeTheme}
  
  />
    <Profile>
          <Welcome>Olá, {emoji}</Welcome>
          <UserName>Seja bem vindo!</UserName>
          

    </Profile>
    <Link className="sair"onClick={signOut} to={'/'}>

<FcExport className='iconexit'/>
        Exit
      </Link>
    </Container>
    
  );
}

export default MainHeader;
import React from 'react';
import { Container,
            LogImg,
            Header,
            Title,
        
            MenuContainer,
                       
            } from './styles';

            import {
              FcPositiveDynamic,
              FcExport,
              FcAreaChart,
              FcNext,
              FcComboChart,
              FcOrgUnit,
              FcDownRight
              

} from 'react-icons/fc';
import { SiBuzzfeed } from "react-icons/si";

import { Link } from 'react-router-dom';


import logoImg from '../../assets/sade.jpg';
import Dashboard from '../pages/Dashboard';


const Aside: React.FC = () => {
  return (
<Container>
  
    <Header>
        <LogImg src={logoImg}  alt="Logo Dashboard" />
        <Title className="nome-logo">Dasboard Blaze</Title>
        </Header>
     
        <MenuContainer>

            <Link to="/dashboard" className='DASHBOARD'>

                    <FcAreaChart className='icon' />
                     DASHBOARD
            </Link>
            <Link to="/list/relatorios">
            <FcComboChart className='icon' />
            RELATÓRIO DOUBLE ON
            </Link>
            <Link to="/list/entry-balance">
                
                     <FcDownRight className='icon segundoo'/>
                     RELATÓRIO DOUBLE OFF
            </Link>

            <Link to="/list/exit-balance">

                     <FcDownRight className='icon segundo'/>
                    DICAS DOUBLE
            </Link>

            <Link to="">

                     <FcOrgUnit className='icon'/>
                     RELATÓRIO MINES
            </Link>
            <Link to="">

                     <FcPositiveDynamic className='icon'/>
                     RELATÓRIO CRASH
            </Link>
            <Link to="#" className='exit'>

                    <FcExport className='icon'/>
                     Sair
            </Link>
            
        </MenuContainer>
     
    </Container>
  );
}

export default Aside;
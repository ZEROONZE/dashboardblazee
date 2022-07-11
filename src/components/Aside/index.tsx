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
              FcCurrencyExchange
              

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
            Relatório Double
            </Link>
            <Link to="/list/entry-balance">
                
                     <FcNext className='icon'/>
                    Black
            </Link>

            <Link to="/list/exit-balance">

                     <FcNext className='icon'/>
                    Red
            </Link>

            <Link to="/list/relatorios">

                     <FcOrgUnit className='icon'/>
                     Relatório Mines
            </Link>
            <Link to="/list/exit-balance">

                     <FcPositiveDynamic className='icon'/>
                     Relatório Crash
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
import React from 'react';
import { Container,
            LogImg,
            Header,
            Title,
        
            MenuContainer,
                       
            } from './styles';

            import {

              MdOutlineDashboard,
MdTrendingUp,
MdOutlinePoll,
MdAssessment,
MdExitToApp


} from 'react-icons/md';
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

                    <MdOutlineDashboard />
                     DASHBOARD
            </Link>

            <Link to="/list/entry-balance">
                
                     <MdOutlinePoll />
                    Black
            </Link>

            <Link to="/list/exit-balance">

                     <MdTrendingUp />
                    Red
            </Link>

            <Link to="/list/exit-balance">

                     <MdOutlinePoll />
                     Relatório Mines
            </Link>
            <Link to="#" className='exit'>

                    <MdExitToApp />
                     Sair
            </Link>
            
        </MenuContainer>
     
    </Container>
  );
}

export default Aside;
import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sliderBar';
import SubMenu from './submenu';
import { IconContext } from 'react-icons/lib';
import { Containerr, Nav, NavIcon, SidebarWrap } from './styles'; 
import GlobalStyle from '../../styles/GlobalStyles'

const animate = keyframes`
 0% {
transform: translate(-100px);
opacity: 0;
 }
 50%{
    opacity: 3;
 }
 100%{
    transform: translate(0px);
    opacity: 1;
 }
`;

export const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  overflow-x: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  animation: ${animate} .5s;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  ::-webkit-scrollbar{
  width: 10px;

}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color:#fff;}

::-webkit-scrollbar-track {
  
  background-color: rgba(0, 0, 0, 0.472);
} 
`;


const Menu = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
       <GlobalStyle />
      <IconContext.Provider  value={{ color: ''  }}   >
   
        <Nav>
          <NavIcon  to='#'>
            <FaIcons.FaBars id="btnMenu"  onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav   sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon   to='#'>
              <AiIcons.AiOutlineClose style={{ color: '#fff'  }}  onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index}>

              
              </SubMenu>
                     
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Menu;

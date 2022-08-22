import React, { useState,  } from 'react';
import { Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import { useAuth } from '../hooks/auth';

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
const SidebarLink = styled(Link)`
  display: flex;
  color: #808080;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #6495ed;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #212529;
  height: 60px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #808080;
  font-size: 18px;
  animation: ${animate} .5s;
  &:hover {
    background: #e1e9fc;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
    const { signOut } = useAuth();

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>
                {item.title}
               
              </SidebarLabel>
             
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;

import React from 'react';

import { Grid } from './styles';


import MainHeader from '../MainHeader';
import Aside from '../Aside/index';
import Content from '../Content';
import Dashboard from '../pages/Dashboard';
import Whatssap from '../whatssap';
import createGlobalStyle from '../../styles/GlobalStyles'
import GlobalStyles from '../../styles/GlobalStyles';


interface BaseLayoutProps {
  children?: React.ReactNode;
}


const Layout: React.FC<BaseLayoutProps> = ({children}) => {

return ( 


    <Grid>
        <MainHeader />
        <GlobalStyles/>
        <Aside />
        <Content>
        
            { children }
            
        </Content>
    </Grid>
);
}

export default Layout;

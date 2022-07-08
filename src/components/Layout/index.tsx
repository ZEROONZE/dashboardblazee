
import React from 'react';

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';
import Dashboard from '../pages/Dashboard';

interface BaseLayoutProps {
  children?: React.ReactNode;
}


const Layout: React.FC<BaseLayoutProps> = ({children}) => {

return ( 


    <Grid>
        <MainHeader />
        <Aside />
        <Content>
            { children }
            
        </Content>
    </Grid>
);
}

export default Layout;

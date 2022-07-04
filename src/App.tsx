import React from 'react';
import './App.css';
import Aside from './components/Aside';
import Content from './components/Content';
import { Grid } from './components/Layout/styles';
import MainHeader from './components/MainHeader';
import GlobalStyles from './styles/GlobalStyles';


const App: React.FC = () => { 
      
      return ( 
      <Grid>
    <MainHeader />
    <Aside />
    <Content />
    <GlobalStyles />

    </Grid>
  );
}

export default App;

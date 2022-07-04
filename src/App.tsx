import React from 'react';
import './App.css';
import Aside from './components/Aside';
import Content from './components/Content';
import { Grid } from './components/Layout/styles';
import MainHeader from './components/MainHeader';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import dark from './styles/themes/dark';

 
const App: React.FC = () => { 
      
      return ( 
        <ThemeProvider theme={dark}>
    
    
    
   <Layout />
    <GlobalStyles />


    </ThemeProvider>
  );
}

export default App;

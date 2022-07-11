import React from 'react';
import './App.css';
import Aside from './components/Aside';
import Content from './components/Content';
import { Grid } from './components/Layout/styles';
import MainHeader from './components/MainHeader';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './components/hooks/theme';
import dark from './styles/themes/dark';

import ContentHeader from './ContetHeader'; 
import Layout from './components/Layout';
import List from './components/pages/List';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';

import RoutesPages from './routes';


const App: React.FC = () => { 
      const {theme} = useTheme()
      return ( 
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        
       <RoutesPages />
    </ThemeProvider>
  );
}

export default App;

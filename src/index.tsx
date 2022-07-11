import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/hooks/theme';
import App from './App';
import dark from './styles/themes/dark';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <BrowserRouter>
 <ThemeProvider toggleTheme={function (): void {
      throw new Error('');
    } } theme={dark}>   
       <App />
       </ThemeProvider>
    </BrowserRouter>
    
);


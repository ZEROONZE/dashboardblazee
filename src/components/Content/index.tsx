import React from 'react';
import List from '../pages/List';

import { Container }  from './styles';


interface BaseLayoutProps {
  children?: React.ReactNode;
}

const Content: React.FC<BaseLayoutProps> = ({children}) => {
  return (
    
      <Container>
          {children}
    
      </Container>
  );
}

export default Content;
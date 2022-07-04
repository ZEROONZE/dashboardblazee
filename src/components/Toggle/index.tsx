import React from 'react';
import {Container, ToggleLabel, ToggleSelector } from './styles';


 const Toggle: React.FC  = () => (
 
    <Container>
        <ToggleLabel>Dark</ToggleLabel>
        <ToggleSelector 
          checked
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={()=> console.log('mudou')}
        />
        <ToggleLabel>Light</ToggleLabel>
    </Container>



)

export default Toggle;

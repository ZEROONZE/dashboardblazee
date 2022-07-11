import React from 'react';
import {Container, ToggleLabel, ToggleSelector } from './styles';
interface IToggleProps{
  labelLeft: String;
  labelRight: String;
  checked: boolean;
  onChange(): void;

}

 const Toggle: React.FC<IToggleProps>= ({

labelLeft,
labelRight,
checked,
onChange

 }) => (
 
    <Container>
        <ToggleLabel className='dark-light'>{labelLeft}</ToggleLabel>
        <ToggleSelector 
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={onChange}
        />
        <ToggleLabel className='dark-light'>{labelRight}</ToggleLabel>
    </Container>



)

export default Toggle;

import React from 'react'
import { Container } from './styles';
interface IselectProps{
    options: {
        value: string | number;
        label: string | number;
    }[],

}



const SelecInput: React.FC<IselectProps> = ({options}) => {
  return (
   <Container >
   <select>

        { 
        options.map(option => ( 
        <option  value={option.value}>{option.label}</option>
        ))
        }

   </select>
   </Container>     
  );
}

export default SelecInput;
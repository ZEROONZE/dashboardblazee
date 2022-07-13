import { render } from '@testing-library/react';
import React from 'react'
import { Container } from './styles';
interface IselectProps{
    options: {
        value: string | number;
        label: string | number;
    }[],
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}



const SelecInput: React.FC<IselectProps> = ({options, onChange, defaultValue }) => {
  
 

  return (
   <Container>
    
   <select onChange={onChange} defaultValue={defaultValue}>

        { 
        options.map(option => ( 
        <option  value={option.value}>{option.label}
      
        </option>
        

        ))
        
        }

   </select>
   </Container>     
  )
}

export default SelecInput;
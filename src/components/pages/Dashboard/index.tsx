import React from 'react'
import { Container, Content } from './style';
import ContentHeader from '../../../ContetHeader';
import SelecInput from '../../SelectInput/Index';
import { useParams } from 'react-router-dom';


const Dashboard: React.FC= () => {
  const {type} = useParams()


  const options = [
    {value:'Lucas', label: 'Souza'},
    {value:'Maria', label: 'Srouza'},
    {value:'Jão', label: 'Seouza'}
]
  return (
   <Container>
    
    <ContentHeader title='Dashboard' lineColor='#fff'>

    <SelecInput options={options} />

    </ContentHeader>
 
   
   </Container>     
  );
}

export default Dashboard;
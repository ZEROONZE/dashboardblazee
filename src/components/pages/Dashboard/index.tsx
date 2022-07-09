import React, {useState} from 'react'
import { Container, Content } from './style';
import ContentHeader from '../../../ContetHeader';
import SelecInput from '../../SelectInput/Index';
import { useParams } from 'react-router-dom';
import WalletBox from '../../Walletbox.tsx';
import MessageBox from '../../MessageBox';
import PieChart from '../../pieChart';
import happyImg from '../../../assets/happy.svg';



const Dashboard: React.FC= () => {
  const {type} = useParams()
  const [monthSelected, setMothSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear())); 
  
  const months = [
    {value:1, label: 'Janeiro'},
    {value:5, label: 'Maio'},
    {value:9, label: 'Outubro'}
];

const years = [
  {value:2019, label: 2019},
  {value:2018, label: 2018},
  {value:2020, label: 2020},
];

  const options = [
    {value:'Lucas', label: 'Souza'},
    {value:'Maria', label: 'Srouza'},
    {value:'Jão', label: 'Seouza'}
]
  return (
   <Container>
    
    <ContentHeader title='Dashboard' lineColor='#fff'>

    <SelecInput options={months} onChange={(e) => setMothSelected(e.target.value)} defaultValue={monthSelected} />
    <SelecInput options={years} onChange={(e)=> setYearSelected(e.target.value)}  defaultValue={yearSelected}/>
    </ContentHeader>
   


  
  <Content>
<WalletBox 
title="saldo"
color="green"
amount={850.00}
footerlabel="Atualizado com base nas entradas"
icon="dolar"
/>

<WalletBox 
title="Red"
color="red"
amount={150.00}
footerlabel="Atualizado com base nas entradas"
icon="arrowUP"
/>

<WalletBox 
title="Black"
color="#000"
amount={500.000}
footerlabel="Atualizado com base nas entradas"
icon="arrowDown"
/>
<MessageBox
title='Muito bem!'
description='Sua carteira está positiva'
footerText='Continue assim, invista seu saldo!'
icon={happyImg}



/>

<PieChart />
  </Content>

   </Container>

  );
}

export default Dashboard;
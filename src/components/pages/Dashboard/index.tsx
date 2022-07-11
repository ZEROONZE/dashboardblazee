import React, {useMemo, useState} from 'react'
import { Container, Content } from './style';
import ContentHeader from '../../../ContetHeader';
import SelecInput from '../../SelectInput/Index';
import { useParams } from 'react-router-dom';
import WalletBox from '../../Walletbox.tsx';
import MessageBox from '../../MessageBox';
import PieChartBox from '../../pieChart';
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



const relationExpensesVersusGains = useMemo(() =>{
const total = 100 + 100;

const Percentgains = (30 / total) * 100;
const Percentexpenses = (30 / total) * 100;
const data = [
  {
    name: "Red",
    value: Percentgains,
    percent: Number(Percentgains.toFixed(1)),
    color:'#ff0000',


  },
{   
   name: "black",
   value: Percentgains,
   percent: Number(Percentexpenses.toFixed(1)),
   color:'#000',
},




];
return data;


},[30, 30]);
  return (
   <Container>
    
    <ContentHeader title='Dashboard' lineColor='#fff'>

    <SelecInput options={months} onChange={(e) => setMothSelected(e.target.value)} defaultValue={monthSelected} />
    <SelecInput options={years} onChange={(e)=> setYearSelected(e.target.value)}  defaultValue={yearSelected}/>
    </ContentHeader>
   


  
  <Content>
<WalletBox 
title="saldo"
color="white"
amount={10}
footerlabel="Atualizado com base nas entradas"
icon="dolar"
/>

<WalletBox 
title="Red"
color="red"
amount={70}
footerlabel="Atualizado com base nas entradas"
icon="arrowUP"
/>

<WalletBox 
title="Black" 
color="#000"
amount={80}
footerlabel="Atualizado com base nas entradas"
icon="arrowDown"
/>
<MessageBox
title='Muito bem!'
description='Sua carteira está positiva'
footerText='Continue assim, invista seu saldo!'
icon={happyImg}



/>

<PieChartBox data={relationExpensesVersusGains}/>
  </Content>

   </Container>

  );
}

export default Dashboard;
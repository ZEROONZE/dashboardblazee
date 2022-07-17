import React, {useMemo, useState} from 'react'
import { Container, Content } from './style';
import ContentHeader from '../../../ContetHeader';
import SelecInput from '../../SelectInput/Index';
import { useParams } from 'react-router-dom';
import WalletBox from '../../Walletbox.tsx';
import MessageBox from '../../MessageBox';
import PieChartBox from '../../pieChart';
import happyImg from '../../../assets/happy.svg';
import expenses from '../../../repositories/expenses';
import listOfMonths from '../../../Utils/months';
import BarChartBox from '../../BarChartBox';
import { getValue } from '@testing-library/user-event/dist/utils';
import gains from '../../../repositories/gains';
import HistoryBox from '../../HystoryBox';


const Dashboard: React.FC= () => {
  const {type} = useParams()
  const [monthSelected, setMothSelected] = useState<number>((new Date().getMonth() + 1));
  const [daySelected, setDaySelected] = useState<number>(new Date().getDay() + 1);
  const [yearSelected, setYearSelected] = useState<number>((new Date().getFullYear())); 
  
 



  const years = useMemo(() =>{
  let uniqueYears: number[] =[];
  


  [...gains].forEach(item => {
    const date = new Date(item.date);
    const year = date.getFullYear();
  if(!uniqueYears.includes(year)){
      uniqueYears.push(year)
  }
  
  });
  return uniqueYears.map(year => {
  
    
    return{
      value: year,
      label: year,
    }
  });
  
  },[])
  
  
  
  const day = useMemo(() =>{
    return listOfMonths.map((day, index) => {
  
      return{
        value: index + 1,
        label: day,
      }
  
    });
   
     
  
    
    },[])
  

   const totalRed = useMemo(() =>{

    let total: number = 0;
   
    gains.forEach(item =>{
        const date = new Date (item.date);
        const year = date.getFullYear();
        const day = date.getDay();

        if(day === daySelected && year === yearSelected){
          try{
            total += Number(item.color === 'red')
            
          }catch{
             throw new Error('Ivalid')
          }
        }
      
      });
   return total;


   },[daySelected, yearSelected]);
  

   
   const totalWhite = useMemo(() =>{

    let total: number = 0;

    gains.forEach(item =>{
        const date = new Date (item.date);
        const year = date.getFullYear();
        const day = date.getDay();

        if(day === daySelected && year === yearSelected){
          try{
            total += Number(item.color === 'white')
            
          }catch{
             throw new Error('Ivalid')
          }
        }
      
      });
   return total;


   },[daySelected, yearSelected]);


   const totalBlack = useMemo(() =>{

    let total: number = 0;
    
    gains.forEach(item =>{
        const date = new Date (item.date);
        const year = date.getFullYear();
        const day = date.getDay();

        if(day === daySelected && year === yearSelected){
          try{
            total += Number(item.color === 'black')
          
          }catch{
             throw new Error('Ivalid')
          }
        }
      
      });
   return total;


   },[daySelected, yearSelected]);


  
 const handleDaySelected = (day: string) => {
  try {
      const parseDay = Number(day);
      setDaySelected(parseDay);
  }
  catch{
      throw new Error('invalid day value. Is accept 0 - 24.')
  }
}

const handleYearSelected = (year: string) => {
  try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
  }
  catch{
      throw new Error('invalid year value. Is accept integer numbers.')
  }
}
  
  
 




const relationExpensesVersusGains = useMemo(() =>{
const total = totalBlack + totalRed + totalWhite;

const PercentWhite = Number(((totalWhite / total) * 100).toFixed(0));

const PercenteRed = Number(((totalRed / total) * 100).toFixed(0));
 const PercenteBlack = Number(((totalBlack / total) * 100).toFixed(0));
const data = [
  {
    name: "White",
    value: totalWhite,
    percent: PercentWhite ? PercentWhite : 0,
    color:'#ffffff',


  },
{   
  name: "Red",
   value: totalRed,
   percent: PercenteRed ? PercenteRed : 0,
   color:'#fb0000',
},
{   
  name: "Black",
   value: totalRed,
   percent: PercenteBlack ? PercenteBlack : 0,
   color:'#000000',
},


];

return data;


},[totalWhite,totalRed, totalBlack ]);



  return (
   <Container>
    
    <ContentHeader title='Dashboard' lineColor='#fff'>

    <SelecInput options={day} 
    onChange={(e) => handleDaySelected(e.target.value)} 
    defaultValue={daySelected} />
    
    <SelecInput options={years} 
    onChange={(e)=> handleYearSelected(e.target.value)}  
    defaultValue={yearSelected}/>
    </ContentHeader>
   


  
  <Content>
<WalletBox 
title="white"
color="white"
amount={totalWhite}
footerlabel="Atualizado com base nas entradas"
icon="dolar"
/>

<WalletBox 
title="Red"
color="red"
amount={totalRed}
footerlabel="Atualizado com base nas entradas"
icon="arrowUP"
/>

<WalletBox 
title="Black" 
color="#000"
amount={totalBlack}
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

                   
                <HistoryBox 
                data={relationExpensesVersusGains} 
                lineColorAmountEntry="#F7931B"
                lineColorAmountOutput="#E44C4E"
            />


                    <BarChartBox title="analytics"
                    data={relationExpensesVersusGains} 
                />
                
                <BarChartBox 
                    title="analytics"
                    data={relationExpensesVersusGains} 
                />
  </Content>

   </Container>

  );
}

export default Dashboard;
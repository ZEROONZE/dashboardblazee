import React, {useCallback, useMemo, useState, useEffect} from 'react'
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
import api from '../../Teste/api';
import DatePicker from "react-datepicker";
import format from 'date-fns/format'
import Whatssap from '../../whatssap/index';

interface IData {
  id: string;
  number: string;
  color: string;
  datetime: string;
  dateFormatted: string;
  tagColor: string;
  amount: string;
  rounds_to_white: string;
}


const Dashboard: React.FC= () => {
  const {type} = useParams()
  const [monthSelected, setMonthSelected] = useState<number>((new Date().getMonth() + 1));
  const [daySelected, setDaySelected] = useState<number>(new Date().getDate());
  const [yearSelected, setYearSelected] = useState<number>((new Date().getFullYear())); 
  const [produtos, setProdutos] = useState<IData[]>([]);
  const [startDate, setStartDate] = useState(new Date())

  useEffect(() => {
    api.get('/report?date=' + format(startDate, "ddMMyyyy"))
      .then((response) => {
        console.log(response)
        setProdutos(response.data)
    })

   
  }, [startDate])

 console.log(startDate)

  
const totalRed =  useMemo(() =>{

 let  total: number = 0;
   
 produtos.forEach(produto => { 
const date = new Date(startDate);


if(startDate === startDate  ){
    try{
      total += Number(produto.color === 'red' && 1 )
    }catch{
    throw new Error('eroo') 

    }
}


});

return total;
},[startDate]);






console.log(totalRed)

const totalBlack =  useMemo(() =>{

  let  total: number = 0;
    
  produtos.forEach(produto => { 
 const date = new Date(startDate);
 
 
 if(startDate === startDate  ){
     try{
       total += Number(produto.color === 'black' && 1 )
     }catch{
     throw new Error('eroo') 
 
     }
 }
 
 
 });
 
 return total;
 },[startDate]);



   console.log(totalBlack)

   const totalWhite =  useMemo(() =>{

    let  total: number = 0;
      
    produtos.forEach(produto => { 
   const date = new Date(startDate);
   
   
   if(startDate === startDate  ){
       try{
         total += Number(produto.color === 'white' && 1 )
       }catch{
       throw new Error('eroo') 
   
       }
   }
   
   
   });
   
   return total;
   },[startDate]);
  
  
  
     console.log(totalWhite)
  



  
 




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
   value: totalBlack,
   percent: PercenteBlack ? PercenteBlack : 0,
   color:'#000000',
},


];

return data;


},[totalWhite,totalRed, totalBlack ]);

const historyData = useMemo (() => {
return produtos.map((_, produto) => {
  let amountEntry = 0;
  let amountRed = 0;
  let amountWhite = 0;
  produtos.forEach(produto => {
    if(startDate === startDate){
      try{ 
        amountEntry += Number(produto.color === 'black');
        amountRed += Number(produto.color === 'red');
        amountWhite += Number(produto.color === 'white');
    }catch{
      throw new Error('is invalid')
    }
  }
  });

return{
   
  amountEntry,
  amountWhite,
  amountRed
}

})


},[yearSelected, monthSelected, ]);

  return (
   <Container>
      <Whatssap />
    <ContentHeader title='Dashboard' lineColor='#fff'>
    <div className="DatePicker1">
      {<DatePicker
        className="calendario1"
        placeholderText="Inserir uma data"
        dateFormat="dd-MM-yyyy"
        selected={startDate}
        selectsStart
        startDate={startDate}
        isClearable
        onChange={(date: any) => setStartDate(date)}
      />}
   
</div>
    
 
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
color="black"
amount={totalBlack}
footerlabel="Atualizado com base nas entradas"
icon="arrowDown"
/>
<MessageBox
title='Estratégia de sucesso!!'
description='Com base nos resultados apurados, quando vier uma sequência de dois números 13 de cor Black, se as próximas duas cores vier black, aposte no vermelho e cubra o branco. '
footerText='Foram analisada 9 resultados, com 8 acertos!'
icon={happyImg}



/>

<PieChartBox data={relationExpensesVersusGains}/>

                   
              



                    <BarChartBox title="Analytics"
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
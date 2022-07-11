import React, {useMemo, useState, useEffect} from 'react'
import { Container, Content, Filters} from './style';
 import {uuid} from 'uuidv4';
import gains from '../../../repositories/gains';
import expenses from '../../../repositories/expenses';
import ContentHeader from '../../../ContetHeader';
import SelecInput from '../../SelectInput/Index';
import HistoryFinanceCard from '../../HistoryFinanceCard';
import { useParams } from 'react-router-dom';
import FormatCurrency from '../../../Utils/fomatCurrency';
import FormatDate from     '../../../Utils/fomartDate';
import listOfMonths from '../../../Utils/months';
import axios from 'axios'


interface IData {
  id: string;
  description: string;
  frequency:string;
  dataFormatted: string;
  tagColor: string;

}


const List: React.FC = () => {
const [data, setData] = useState<IData[]>([]);
const [monthSelected, setMothSelected] = useState<string>(String(new Date().getMonth() + 1));
const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear())); 
const [selectedFrequency, setSelectedFrequency] = useState(['red', 'black']);

const { type } = useParams()

const title = useMemo(() =>{
return type === 'entry-balance' ? 'Black' : 'Red'

},[type])

const lineColor = useMemo(() =>{
  return type === 'entry-balance' ? '#000' : '#E44C4E'
  
  },[type])

  const listData = useMemo(() =>{
    return type === 'entry-balance' ? gains : expenses;
  },[type]);



const years = useMemo(() =>{
let uniqueYears: number[] =[];
listData.forEach(item => {
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

},[listData])



const months = useMemo(() =>{
  return listOfMonths.map((month, index) => {

    return{
      value: index + 1,
      label: month,
    }

  });
 
   

  
  },[])

  const handleFrequencyClick = (frenquency: string) => {
    const alreadySelected = selectedFrequency.findIndex(item => item === frenquency);

    if(alreadySelected >= 0){
      const filtered = selectedFrequency.filter(item => item !== frenquency);
      setSelectedFrequency(filtered);
    }else{
      setSelectedFrequency((prev) => [...prev, frenquency]);
    }
  }








useEffect(() =>{
const filteredDate = listData.filter(item =>{
const date = new Date (item.date);
const month = String(date.getDate() + 1);
const year = String(date.getFullYear());

return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
});



const FormattedDate = filteredDate.map(item => {
  return{ 
  id: uuid(),
  description: item.description,
  frequency:item.frequency,
  dataFormatted: FormatDate(item.date),
  tagColor: item.frequency === 'red' ? '#ff0000' : '#000',
}
});

setData(FormattedDate);


},[listData, monthSelected, yearSelected, data.length, selectedFrequency]);
  return (
    <Container>
    
    <ContentHeader title={title} lineColor={lineColor}>

    <SelecInput options={months} onChange={(e) => setMothSelected(e.target.value)} defaultValue={monthSelected} />
    <SelecInput options={years} onChange={(e)=> setYearSelected(e.target.value)}  defaultValue={yearSelected}/>
    </ContentHeader>
    
    <Filters>
    <button type="button" className={`tag-filter tag-filter-red
    ${selectedFrequency.includes('red') && 'tag-actived'}`}
    onClick={() => handleFrequencyClick('red') }
    >
      RED
    </button>


    <button type="button" className={ `tag-filter tag-filter-black
    ${selectedFrequency.includes('black') && 'tag-actived'}`}
    
    onClick={() => handleFrequencyClick('black') }
      >
    BLACK
    </button>
    </Filters>
    
    <Content>
    
{ 
    data.map(item => ( 
    <HistoryFinanceCard
    key={item.id}
    tagColor={item.tagColor}
    title={item.description}
    subtilte={item.dataFormatted}
    
    />
    ))

  } 
    </Content>

   </Container>    
  );
}

export default List;
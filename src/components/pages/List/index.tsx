import React, {useMemo, useState, useEffect} from 'react'
import { Container, Content, Filters
 } from './style';
import gains from '../../../repositories/gains';
import expenses from '../../../repositories/expenses';
import ContentHeader from '../../../ContetHeader';
import SelecInput from '../../SelectInput/Index';
import HistoryFinanceCard from '../../HistoryFinanceCard';
import { useParams } from 'react-router-dom';
import FormatCurrency from '../../../Utils/fomatCurrency';
import FormatDate from     '../../../Utils/fomartDate';


interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency:string;
  dataFormatted: string;
  tagColor: string;

}


const List: React.FC = () => {
const [data, setData] = useState<IData[]>([]);
const [monthSelected, setMothSelected] = useState<string>(String(new Date().getMonth() + 1));
const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear())); 


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

useEffect(() =>{
const filteredDate = listData.filter(item =>{
const date = new Date (item.date);
const month = String(date.getDate() + 1);
const year = String(date.getFullYear());

return month === monthSelected && year === yearSelected;
});



const FormattedDate = filteredDate.map(item => {
  return{ 
  id: String(new Date().getTime()) + item.amount,
  description: item.description,
  amountFormatted: FormatCurrency(Number(item.amount)),
  frequency:item.frequency,
  dataFormatted: FormatDate(item.date),
  tagColor: item.frequency === 'red' ? '#ff0000' : '#000',
}
});

setData(FormattedDate);


},[listData, monthSelected, yearSelected, data.length]);
  return (
    <Container>
    
    <ContentHeader title={title} lineColor={lineColor}>

    <SelecInput options={months} onChange={(e) => setMothSelected(e.target.value)} defaultValue={monthSelected} />
    <SelecInput options={years} onChange={(e)=> setYearSelected(e.target.value)}  defaultValue={yearSelected}/>
    </ContentHeader>
    
    <Filters>
    <button type="button" className='tag-filter tag-filter-red'>
      RED
    </button>


    <button type="button" className='tag-filter tag-filter-black'>
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
    amount={item.amountFormatted}
    />
    ))

  } 
    </Content>

   </Container>    
  );
}

export default List;
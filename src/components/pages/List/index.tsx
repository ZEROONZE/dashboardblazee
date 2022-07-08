import React, {useMemo} from 'react'
import { Container, Content, Filters
 } from './style';

import ContentHeader from '../../../ContetHeader';
import SelecInput from '../../SelectInput/Index';
import HistoryFinanceCard from '../../HistoryFinanceCard';
import { useParams } from 'react-router-dom';

const List: React.FC = () => {
const { type } = useParams()

const title = useMemo(() =>{
return type === 'entry-balance' ? 'Black' : 'Red'

},[type])

const lineColor = useMemo(() =>{
  return type === 'entry-balance' ? '#000' : '#E44C4E'
  
  },[type])
  


  const months = [
    {value:8, label: 'Agosto'},
    {value:9, label: 'Setembro'},
    {value:10, label: 'Outubro'}
];

const yaers = [
  {value:2020, label: 2020},
  {value:2019, label: 2019},
  {value:2018, label: 2018},
];


  return (
    <Container>
    
    <ContentHeader title={title} lineColor={lineColor}>

    <SelecInput options={months} />
    <SelecInput options={yaers} />
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
    
    <HistoryFinanceCard
    
    tagColor="#E44C4E"
    title="RED"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
    
    tagColor="BLACK"
    title="BLACK"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
   tagColor="#E44C4E"
    title="RED"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
   tagColor="#E44C4E"
    title="RED"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
   tagColor="#E44C4E"
    title="RED"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
    
   tagColor="BLACK"
    title="BLACK"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
    
   tagColor="BLACK"
    title="BLACK"
    subtilte="14:31:00"
    amount=""
    />

<HistoryFinanceCard
    
    tagColor="#E44C4E"
    title="RED"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
    
    tagColor="BLACK"
    title="BLACK"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
   tagColor="#E44C4E"
    title="RED"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
   tagColor="#E44C4E"
    title="RED"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
   tagColor="#E44C4E"
    title="RED"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
    
   tagColor="BLACK"
    title="BLACK"
    subtilte="14:31:00"
    amount=""
    />
     <HistoryFinanceCard
    
   tagColor="BLACK"
    title="BLACK"
    subtilte="14:31:00"
    amount=""
    />


    </Content>

   </Container>    
  );
}

export default List;
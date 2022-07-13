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
  number: string;
  color: String;
  datetime: string;
  dataFormatted: string;
  tagColor: string;
  

}


const List: React.FC = () => {
const [data, setData] = useState<IData[]>([]);
const [monthSelected, setMothSelected] = useState<string>(String(new Date().getMonth() + 1));
const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear())); 
const [selectedColor, setSelectedColor] = useState(['red', 'black', 'white' ]);

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

  const handleColorClick = (color: string) => {
    const alreadySelected = selectedColor.findIndex(item => item === color);

    if(alreadySelected >= 0){
      const filtered = selectedColor.filter(item => item !== color);
      setSelectedColor(filtered);
    }else{
      setSelectedColor((prev) => [...prev, color]);
    }
  }








useEffect(() =>{
const filteredDate = listData.filter((item) =>{
const date = new Date (item.date);
const month = String(date.getDate() + 1);
const year = String(date.getFullYear());

return month === monthSelected && year === yearSelected && selectedColor.includes(item.color);
});



const FormattedDate = filteredDate.map((item: {
  [x: string]: any; number: any; color: string; date: string; 
}) => {
  return{ 
  id: uuid(),
  number: item.number,
  color:item.color,
  datetime:item.datetime,
  dataFormatted: FormatDate(item.date),
  tagColor: item.color === 'red' && '#ff0000' || item.color === 'black' && '#000' || '#fff'
  
}
});

setData(FormattedDate);


},[listData, monthSelected, yearSelected, data.length, selectedColor]);
  return (
    <Container>
    
    <ContentHeader title={title} lineColor={lineColor}>

    <SelecInput  options={months} onChange={(e) => setMothSelected(e.target.value)} defaultValue={monthSelected} 
    
   
    
    
    />


    </ContentHeader>
    
    <Filters>
    <button type="button" className={`tag-filter tag-filter-red
    ${selectedColor.includes('red') && 'tag-actived'}`}
    onClick={() => handleColorClick('red') }
    >
      RED
    </button>


    <button type="button" className={ `tag-filter tag-filter-black
    ${selectedColor.includes('black') && 'tag-actived'}`}
    
    onClick={() => handleColorClick('black') }
      >
    BLACK
    </button>
    <button type="button" className={`tag-filter tag-filter-white
    ${selectedColor.includes('white') && 'tag-actived'}`}

    onClick={() => handleColorClick('white') }
    >
  WHITE
</button>






    </Filters>
    
    <Content>
   
{ 
    data.map(item => ( 
    <HistoryFinanceCard
        key={item.id}
        tagColor={item.tagColor}
        title={item.number}

        datetime={item.datetime} subtilte={''}    />
    ))

  } 
    </Content>

   </Container>    
  );
}

export default List;
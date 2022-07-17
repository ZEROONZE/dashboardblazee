import React, {useMemo, useState, useEffect} from 'react'
import { Container, Content, Filters} from './style';
 import {uuid} from 'uuidv4';
import gains from '../../../repositories/gains';

import ContentHeader from '../../../ContetHeader';
import SelecInput from '../../SelectInput/Index';
import HistoryFinanceCard from '../../HistoryFinanceCard';

import FormatCurrency from '../../../Utils/fomatCurrency';
import FormatDate from     '../../../Utils/fomartDate';
import listOfMonths from '../../../Utils/months';



interface IRouteParams {
  match: {
      params: {
          type: string;
      }
  }
}


interface IData {
  id: string;
  number: string;
  color: String;
  datetime: string;
  dataFormatted: string;
  tagColor: string;
  amount: string;

}


const List: React.FC<IRouteParams> = ({ match }) => {
const [data, setData] = useState<IData[]>([]);
const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
const [daySelected, setDaySelected] = useState<number>(new Date().getDay() + 1);
const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear()); 
const [selectedColor, setSelectedColor] = useState(['red', 'black', 'white' ]);

const type = match.params.type;



  const title = useMemo(() =>{
  return type === 'entry-balance' ? 'Relatório Dash' : 'Red'

  },[type])
  
  const lineColor = useMemo(() =>{
    return type === 'entry-balance' ? '#000' : '#E44C4E'
    
    },[type])

    const listData = useMemo(() =>{
      return type === 'entry-balance' ? gains : gains;
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

},[listData]);



const day = useMemo(() =>{
  return listOfMonths.map((day, index) => {

    return{
      value: index + 1,
      label: day,
    }

  },[]);
 
   

  
  },[]);

  const handleColorClick = (color: string) => {
    const alreadySelected = selectedColor.findIndex(item => item === color);

    if(alreadySelected >= 0){
      const filtered = selectedColor.filter(item => item !== color);
      setSelectedColor(filtered);
    }else{
      setSelectedColor((prev) => [...prev, color]);
    }
  }

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






useEffect(() =>{



const filteredData = listData.filter(item => {
const date = new Date (item.date);  
const day = date.getDay();
const year = date.getFullYear();

return day === daySelected && year === yearSelected && selectedColor.includes(item.color);
});



const FormattedDate = filteredData.map(item => {
  return { 
  id: uuid(),
  number: item.number,
  color:item.color,
  amount:FormatCurrency(Number(item.amount)),
  datetime:item.datetime,
  dataFormatted: FormatDate(item.date),
  tagColor: item.color === 'red' && '#ff0000' || item.color === 'black' && '#000' || '#fff',
  
}

});

setData(FormattedDate);
},[listData, monthSelected, yearSelected, data.length, daySelected, selectedColor]);



  return (
    <Container>
    
    <ContentHeader title={title} lineColor={lineColor}>

    <SelecInput  options={day} onChange={(e) => handleDaySelected(e.target.value)} defaultValue={daySelected} 
       />
   
    <SelecInput 
                    options={years} 
                    onChange={(e) => handleYearSelected(e.target.value)} 
                    defaultValue={yearSelected}
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
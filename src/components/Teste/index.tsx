import React, { useState, useEffect, useMemo } from "react";
import DatePicker from "react-datepicker";
import api from "./api";
import format from 'date-fns/format'
import {Container, Content,ContentHeader1 } from './styles1'
import ContentHeader from "../../ContetHeader";
import ClipLoader from "react-spinners/ClipLoader";


interface IData {
  id: string;
  number: string;
  color: String;
  datetime: string;
  dateFormatted: string;
  tagColor: string;
  amount: string;
  rounds_to_white: string;
}
interface IRouteParams {
  match: {
      params: {
          type: string;
      };
  }
}


const Teste: React.FC<IRouteParams> = ({match}) => {
  const [isLoading, setIsLoading] = useState(true);
    const [selectedDate, setselectedDate] = useState(null)
  const [endDate, setEndDate] = React.useState<Date | null | undefined>(new Date());
  const [items, setItems] = useState([]);
  const [produtos, setProdutos] = useState<IData[]>([]);
  const [startDate, setStartDate] = useState(new Date())






 





  const type = match.params.type;
  const title = useMemo(() =>{
    return type === 'entry-balance' ? 'Relatório Double' : 'Relatório Double'
  
    },[type])

    const lineColor = useMemo(() =>{
      return type === 'entry-balance' ? '#000' : '#E44C4E'
      
      },[type])
  useEffect(() => {
    
    api.get('/report?date=' + format(startDate, "ddMMyyyy"))
      .then((response) => {
        console.log(response)
        setProdutos(response.data)
    })

  
  }, [startDate,isLoading])
  
  useEffect(() => {
     setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);
 

  return (

    <Container>
     

 
<ContentHeader1>
  
    <ContentHeader title={title} lineColor={lineColor}>
     

     <div className="DatePicker" >
      {<DatePicker 
        className="calendario"
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
</ContentHeader1>
<Content>


{isLoading ? (
        <ClipLoader  color={'#ffffff'} 
    size={50} loading={isLoading}/> 
      ):(
    
<div className='tabela1' id="row">
        <ul className='tabela2'>
          {produtos.map(produto => (
            <div key={produto.id}>

              <div> {produto.color === 'red' && <p className='redaa'>{produto.number}</p> || produto.color === 'black' && <p className='reda11'>{produto.number}</p> || <><p className="mostrar" >Qtd até cair</p><p className='reda22'>{produto.rounds_to_white}</p></>}</div>
        
              <div className="datatime"> {produto.datetime}</div>

            </div>
          ))}
        </ul>
      </div>
       )}
     </Content>
     
    </Container>

  )
}

export default Teste;


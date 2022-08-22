import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Container } from './styles';

import { TbArrowBigDownLines } from 'react-icons/tb'

export default function Mobile() {

 
    const [isLoaded, setIsLoaded] = useState(true);
   
    const [items, setItems] = useState([]);
    const loaderRef = useRef(null);
    const [data, setData] = useState();
    const scrollToElement = () => loaderRef.current.scrollIntoView();
    const current = new Date();
    const date = `?date=${current.getDate()}0${current.getMonth('') + 1}${current.getFullYear()}`;

    useEffect(() => {

        getData()

    }, []);

    async function getData() {

    await axios('https://vps20643.hostzonevps.net/json/report' + date)

            .then  ((response) => {

         setItems (response.data)
                console.log(response)
                console.log(response.data)

return  setItems(response.data)

            })
          

            .finally(() => {
                setIsLoaded(false);
            })
         

  
    }
    console.log(date)

    console.log(loaderRef)
return (
<>
    <div className='titlemobile'>
            <h1 style={{ padding: "3px",  fontSize: "20px", textAlign:"center", justifyContent:"center", marginLeft:"-4px"}}   className="title1mobile">Relatório em tempo real</h1>
        </div>
<Container>



    <div className='boxmobile'>

        

        <button className='buttonmobile'

onClick={scrollToElement}><TbArrowBigDownLines />

</button>

<button type='button1' className='bottom2' onClick={() => getData()}>Atualizar</button>
        <table className='tabelamobile' >

            
            <tbody className='contentmobile'>

                {items.map(item => (
                    <tr key={item.id} className="fundomobile">
                        <td id='n2' value="1">{item.number === 'red' && <p className='rednumeromobile'>{item.number}</p> || item.color === 'red' && <p className='rednumeromobile'>{item.number}</p> || item.color === 'black' && <p className='reda1numeromobile'>{item.number}</p> || <p className='reda2numeromobile'>Qtd até cair</p>}</td>
                        <td id='n2' value="1" >{item.color === 'red' && <p className='redamobile'>{item.number}</p> || item.color === 'black' && <p className='reda1mobile'>{item.number}</p> || <p className='reda2mobile'>{item.rounds_to_white}</p>}</td>


                        <td> {item.datetime}</td>
                      
                    </tr>
                    
                ))}
                 <p  ref={loaderRef} style={{ margin: "3px", textAlign: "center" }}></p>
      
            </tbody>
           
        </table>



    </div >

    </Container>
    </>
);

}
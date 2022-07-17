import React from 'react';
 






class List extends React.Component {
   
    state = {
        linguagens: []
    };

    componentDidMount() {
        
        fetch('https://archivesbotblaze.herokuapp.com/json/report?date=17072022')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    linguagens: res

                });
            });
    }


 

    

    render() {
        return (
            
            <div className='box'>
            
                <div className='tabela-title'>
                   <h1 className="title">Relatório Double</h1>
                </div>

                    <table className='tabela'>
                   

                        <tbody className='tb-content'>
                             {this.state.linguagens.map(item => (
                          <tr key={item.id} className="fundo4">
                            <td id='n2' value="1">{item.number === 'red' && <color className='rednumero'>{item.number}</color>|| item.color === 'red' && <color className='rednumero'>{item.number}</color> || item.color === 'black' && <color className='reda1numero'>{item.number}</color> || <color className='reda2numero'>{item.number} </color>}</td>
                            <td id='n2' value="1" >{item.color === 'red' && <color className='reda'>Red</color> || item.color === 'black' && <color className='reda1'>Black</color> || <color className='reda2'>White</color>}</td>
                            
  
                            <td> {item.datetime}</td>
                          
                           </tr>
                                 ))}
                       </tbody>
                   </table>


                   


        
        




</div>

        );
    }
}

export default List;
import React from 'react';
 





class List extends React.Component {
 
    
    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch('https://archivesbotblaze.herokuapp.com/json/report')
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
                       <thead>
                          <tr>
                            <th>Number</th>
                            <th>color</th>
                            <th>time</th>
                          </tr>
                        </thead>

                        <tbody className='tb-content'>
                             {this.state.linguagens.map(item => (
                          <tr key={item.id} className="fundo4">
                            <td id='n2' value="1">{item.number}</td>
                            <td id='n2' value="1" >{item.color}</td>
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
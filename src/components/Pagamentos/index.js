import React, {useEffect, useState} from "react"; 


import { Container } from "./styles";

const options = {
  method: 'POST',
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'}
};





export default function Pagamentos() {
  const [items, setItems] = useState([]);
  
  
  useEffect(() => {

    getData()

}, []);

function getData() {


   
fetch('https://sandbox.api.pagseguro.com/pix/pay/txid', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

}

return (


  <tbody className='tb'>
<div>Teste</div>
  {items.map(item => (
      <tr key={item.id}>

      <td> {item.options}</td>
      <td> {item.valor}</td>            
      </tr>
   ))}
      </tbody>



)

} 




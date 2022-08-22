import React from "react";
import { Container } from "./styles";
import Telegran from "./Telegran";

const Double: React.FC = () => {
return(

<Container>
<div className="texto-geral">
<h1>Como funciona o grupo pago ?</h1>

<p>Vamos lá, como o grupo pago você terá lucro todos dias, basta seguir as dicas e estrátegias, o grupo enviara um sinal de acordo com as estratégias</p>
<p>bastar clicar no link é apostar nas cores indicada pelo boot, o boot gera cerca de 120 sinais por dia, com média de 89% de acerto. 
 </p>
<p>Ou seja, se você apostar 5 reais em todos os sinais, terá 106 Green e 14 Loss, no final do dia sua banca vai está com R$ 460,00. </p>
</div>
<div className="greenfoto">
<img className="greenfoto" src="green.png"/>
</div>
<div className="texto-segundario">
<p>
    Agora que já sabe como funciona que tal entrar no grupo free para fazer um teste, sem pagar nada. 
</p>
</div>
<Telegran/>

<div className='bannner'>
<div className="banner animated tada">
 <div className=" big-text animated tada">85% DE DESCONTO</div>
  <div className='texto'>Por Apenas <strong>R$ 29,99</strong></div>
  
</div>
<div className="botunP">
<a className="botun" href="https://sacola.pagseguro.uol.com.br/6d705349-3477-4c9d-ba47-b5a4c5ecf619">COMPRAR</a>
</div>
</div>
</Container>


)



} 


export default Double;
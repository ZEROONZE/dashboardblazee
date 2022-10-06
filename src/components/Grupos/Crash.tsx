import React from 'react';
import { FaTelegram } from 'react-icons/fa'
import { Container } from './styles';

const TelegranCrash: React.FC= () => {

return(

   <Container>
<div className="texto-geral">
<h1>Como funciona grupo de sinal CRASH ?</h1>

<p>Vamos lá, como o grupo pago você terá lucro todos dias, basta seguir as dicas e estrátegias, o grupo enviara um sinal de acordo com as estratégias</p>
<p>bastar clicar no link é adicinar uma auto retirada na old que o boot está informando, o boot gera cerca de 220 sinais por dia, com média de 89% de acerto. 
 </p>

</div>
<div className="greenfoto">
<img className="greenfoto" src="green1.png"/>
</div>
<div className="texto-segundario">
<p>
    Agora que já sabe como funciona que tal entrar no grupo free para fazer um teste, sem pagar nada. 
</p>
</div>
<a
        href="https://t.me/botgreenforeverCrash"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      > 
        <FaTelegram className="fa fa-whatsapp whatsapp-icon"></FaTelegram>
        <p className='grupofree'>Grupo grátis</p>
      </a>




      </Container>

)




}

export default TelegranCrash;
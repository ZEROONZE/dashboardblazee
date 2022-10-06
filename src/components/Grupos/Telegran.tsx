import React from 'react';
import { FaTelegram } from 'react-icons/fa'
import { Container } from './styles';

const Telegran: React.FC= () => {

return(
<Container>
   
<a
        href="https://t.me/botgreenforeverDouble"
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

export default Telegran;
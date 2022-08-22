import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from './styles';

const Whatssap: React.FC= () => {

return(
<Container>
<a
        href="https://wa.me/message/RXVMXHTP347HC1"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="fa fa-whatsapp whatsapp-icon"></FaWhatsapp>
      </a>


      </Container>

)




}

export default Whatssap;
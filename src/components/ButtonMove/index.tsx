import React, { useState} from "react";
import { Button } from "./styles";
import {FaArrowCircleDown} from 'react-icons/fa'
import Api from '../pages/Dashboard/Home'




const ButtonMover:  React.FC = () => {
const [visible, setVisible] = useState(true);


return(
  
<Button>
    <FaArrowCircleDown
    style={{display: visible ? 'inline' : 'none'}} />
</Button>
   

);

}

export default ButtonMover;






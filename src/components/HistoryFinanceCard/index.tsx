import React from "react";
import { Container, Tag } from "./styles";

interface IHistoryFinanceCardProps {
 
    tagColor: string;
    title: string;
    subtilte: string;
  
}


const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
     tagColor, title, subtilte
}) => {
return(

<Container>
<Tag color="#f90000" />
<div>
    <span>{title}</span>
    <small>{subtilte}</small>
</div>
<h3>{}</h3>
</Container>

)



}

export default HistoryFinanceCard;
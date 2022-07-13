import React from "react";
import { Container, Tag } from "./styles";

interface IHistoryFinanceCardProps {
 
    tagColor: string;
    title: string;
    subtilte: string;
    datetime: string;
}


const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
     tagColor, title, subtilte, datetime
}) => {
return(

<Container>
<Tag color={tagColor} />
<div>
    <span>{title}</span>
   
  
</div>
<h3>{datetime}</h3>
</Container>

)



}

export default HistoryFinanceCard;
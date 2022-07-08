import React from "react";
import { Container, Tag } from "./styles";

interface IHistoryFinanceCardProps {
 
    tagColor: string;
    title: string;
    subtilte: string;
    amount: string;
}


const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
     tagColor, title, subtilte, amount
}) => {
return(

<Container>
<Tag color={tagColor} />
<div>
    <span>{title}</span>
    <small>{subtilte}</small>
</div>
<h3>{amount}</h3>
</Container>

)



}

export default HistoryFinanceCard;
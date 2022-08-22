import React from "react";
import { Container, Tag } from "./styles";

interface IHistoryFinanceCardProps {
 
    tagColor: string;
    title: string;
    subtitle: string;
    datetime: string;
}


const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
     tagColor, title, subtitle, datetime
}) => {
return(

<Container>
<Tag color={tagColor} />
<div>
    <span>{title}</span>
    <small>{subtitle}</small>

  
</div>
<h3>{datetime}</h3>
</Container>

)



}

export default HistoryFinanceCard;
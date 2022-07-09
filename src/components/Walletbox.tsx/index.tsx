import React, { useMemo } from "react";
import CountUp from 'react-countup';

import dollarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-down.svg';
import arrowDownImg from '../../assets/arrow-up.svg';

import { Container } from "./styles";
interface IWalletBoxProps {
    title:string;
    amount: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUP' | 'arrowDown';
    color: string;
}




const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerlabel,
    icon, color
}) => {

const iconSelected = useMemo(() => {
if(icon == 'dolar')
return dollarImg;
if(icon == 'arrowUP')
return arrowUpImg;
if(icon == 'arrowDown')
return arrowDownImg;
},[icon]);





return (
    <Container color={color}>
        <span>{title}</span>
        <h1>
            <CountUp 
            end={amount}
            duration={3}
            prefix={"R$"}
            separator="."
            decimal=","
            decimals={2}
            />
            
            </h1>
        <small>{footerlabel}</small>
        <img src={iconSelected} alt={title} />

    </Container>


);


}

export default WalletBox;

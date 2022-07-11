import React from "react";
import { NumericLiteral } from "typescript";
//import {
//PieChart,
//Pie,
//Cell,
//ResponsiveContainer

//} from 'recharts'

import { 
    Container,
    SlideLeft,
    LegendContainer,
    Legend,
    SliderRigth,



} from "./styles";

interface IPieChartProps{
    data: {
        name: String;
        value: Number;
        percent:Number; 
        color: String;

}[];
}


const PieChart: React.FC<IPieChartProps> = ({ data }) =>( 



    <Container>
            <SlideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                    { 
                    data.map(indicator => (
                             <Legend   color="#000">
                             <div>9%</div>
                             <span>{indicator.name}</span>
                             </Legend>
                     ) )
                    }
               
                </LegendContainer>
            </SlideLeft>

            <SliderRigth>
                       
            </SliderRigth>

    </Container>


);




export default PieChart;
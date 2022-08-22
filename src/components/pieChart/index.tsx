
import React from 'react';

import {
   PieChart,
  
   Cell,
   ResponsiveContainer,
   Pie
} from 'recharts';

import { 
    Container,
    SlideLeft,
    LegendContainer,
    Legend,
    SideRight,
 }  from './styles';


 interface IPieChartProps {
     data: {
        name: string;
        value: number;
        percent: number;
        color: string;
     }[];
 }


const PieChartBox: React.FC<IPieChartProps> = ({ data }) => {




  
        return (

    <Container>
            <SlideLeft>
                <h2>Gráfico</h2>
                <LegendContainer>
                    { 
                    data.map((indicator) => (
                             <Legend key={indicator.name} color={indicator.color}>
                             <div>{indicator.percent}%</div>
                             <span>{indicator.name}</span>
                             </Legend>
                     ) )
                    }
               
                </LegendContainer>
            </SlideLeft>

            <SideRight>
            <ResponsiveContainer>
                <PieChart >
                   <Pie  data={data} dataKey="percent" cx="50%" cy="50%" >
                
                        {
                            data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                 </Pie>

                 
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
        );

 




} 


export default PieChartBox;
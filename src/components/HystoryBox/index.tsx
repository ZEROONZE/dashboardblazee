import React from 'react';

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
 
} from 'recharts';



import { 
    Container, 
    ChartContainer,
    Header,
    LegendContainer,
    Legend,
    
}  from './styles';


interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
     
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
    lineColorAmountRed: string;
    lineColorAmountWhite: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorAmountEntry, lineColorAmountOutput, lineColorAmountRed, lineColorAmountWhite
}) => (
    <Container>
        <Header>
            <h2>Análise diária</h2>

            <LegendContainer>
                <Legend color={lineColorAmountEntry}>
                    <div></div>
                    <span>Black</span>
                </Legend>

                <Legend color={lineColorAmountWhite}>
                    <div></div>
                    <span>White</span>
                </Legend>
                <Legend color={lineColorAmountOutput}>
                    <div></div>
                    <span>Red</span>
                </Legend>
            </LegendContainer>
        </Header>

        <ChartContainer className='LineChart'>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart  data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid  strokeDasharray="3 3" stroke="#cecece" />
                    <XAxis dataKey="month" stroke="#cecece" />
                   
                    <Line 
                        type="monotone"                
                        dataKey="amountEntry"
                        name="red"
                        stroke={lineColorAmountRed}
                        strokeWidth={5}
                        dot={{ r: 5}}
                        activeDot={{ r: 8}}
                    />
                    <Line 
                        type="monotone"                
                        dataKey="amountRed"
                        name="black"
                        stroke={lineColorAmountEntry}
                        strokeWidth={5}
                        dot={{ r: 5}}
                        activeDot={{ r: 8}}
                    />
                    <Line 
                        type="monotone"                
                        dataKey="amountWhite"
                        name="White"
                        stroke={lineColorAmountWhite}
                        strokeWidth={5}
                        dot={{ r: 5}}
                        activeDot={{ r: 8}}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    </Container>
)

export default HistoryBox;
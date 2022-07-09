import React from "react";


import { 
    Container,
    SlideLeft,
    LegendContainer,
    Legend,
    SliderRigth,



} from "./styles";


const PieChart: React.FC = () =>( 



    <Container>
            <SlideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                <Legend color="#eb0000">
                    <div>95%</div>
                    <span>Red</span>
                </Legend>

                <Legend color="#000">
                    <div>5%</div>
                    <span>Black</span>
                </Legend>
                </LegendContainer>
            </SlideLeft>

            <SliderRigth>
                
               
            </SliderRigth>

    </Container>


);




export default PieChart;
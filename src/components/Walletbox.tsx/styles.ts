import styled from "styled-components";


interface IContainerProps {
    color:string;
}



export const Container = styled.div<IContainerProps>`
background-color: ${props => props.color};
width: 32%;
height: 170px;
color: ${props => props.theme.colors.white};
border-radius: 8px;
padding:10px 20px;
position: relative;
margin: 10px 0;
overflow: hidden;

>img {
opacity: .3;
height: 110%;
position: absolute;
top:-10px;
right: -30px;


}
>span{
font-size: 18px;
font-weight: 12px;


}
>small{
    font-size: 12px;
    position: absolute;
    bottom: 10px;
}
`;

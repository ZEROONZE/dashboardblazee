import styled from "styled-components";


interface IContainerProps {
    color:string;
}



export const Container = styled.div<IContainerProps>`
background-color: ${props => props.color};
width: 32%;
height: 170px;
color: #d3d3d3;
border-radius: 8px;
padding:10px 20px;
position: relative;
margin: 10px 0;
overflow: hidden;
font-family: 40px;
>img {
opacity: .2;
height: 100%;
position: absolute;
top:0px;
right: 0px;


}
>span{
font-size: 27px;
font-weight: 12px;
font-weight: bold;

}
>small{
    font-size: 14px;
    position: absolute;
    bottom: 10px;
}


>span h1{
    font-size: 38px;
}
`;

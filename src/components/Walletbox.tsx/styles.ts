import styled, {keyframes}from "styled-components";


interface IContainerProps {
    color:string;
}
const animate = keyframes`
 0% {
transform: translate(-100px);
opacity: 0;
 }
 50%{
    opacity: 3;
 }
 100%{
    transform: translate(0px);
    opacity: 1;
 }

`;



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
animation: ${animate} .5s;

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



@media(max-width: 770px){
        > small {
            bottom: -30px;
            text-align: center;
            position: relative;
            justify-content: center;
        }
        > span {
            font-size: 14px;
        }
        > h1 {
            word-wrap: break-word;
            font-size: 22px;
            strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }
    }
    @media(max-width: 420px){
        width: 100%;
        >small{
                text-align: center;
                position: relative;
                justify-content: center;
               bottom: -60px;

            }
        >span{
            font-size: 22px;

        }
        > h1 {
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            strong {
                position: initial;        
                width: auto;
                text-align: center;
                font-size: 22px;
            }
           
            strong:after {
                display: inline-block;
                content: '';
                width: 1px;   
                           
            }
        }
    }
`;

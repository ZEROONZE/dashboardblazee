import styled, {keyframes} from "styled-components";
interface ILegendProps{

    color: string;

}
const animate = keyframes`
 0% {
transform: translate(100px);
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

export const Container = styled.div`
width: 65%;
height: 300px;
margin:  30px 0;
padding: 0px 10px;
background-color: ${props => props.theme.colors.tertiary};
color: #a9a9a9;
border-radius: 7px;
display: flex;
font-weight: bold;
animation: ${animate} .5s;
@media(max-width: 770px){
        display: flex;
        width: 100%;
    }
`;


export const SlideLeft = styled.aside`
padding: 30px 20px;

>h2{
    margin-bottom: 20px;

}
`;
export const LegendContainer = styled.ul`
list-style: none;
`;
export const Legend = styled.li<ILegendProps>`
align-items:  center;
display: flex;
margin-top: 7px;
padding:10px 20px;
> div {
background-color: ${props => props.color};
width: 55px;
height: 45px;
border-radius: 5px;
font-size: 18px;
line-height: 45px;
text-align: center;
}

>span{
    margin-left: 5px;
}
@media(max-width: 1345px){
        padding: 0 15px 5px;
        margin-bottom: 7px;
        > h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }
    @media(max-width: 420px){
        padding: 10px;
        margin-bottom: 1px;
    }

`;
export const SideRight = styled.main`
  display: flex;
 flex: 1;
  justify-content: center;


`;
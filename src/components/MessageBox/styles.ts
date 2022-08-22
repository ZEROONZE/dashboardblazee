import styled,{keyframes} from "styled-components";
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
export const Container = styled.div`
width: 32%;
margin-top: 30px;
height: 305px;
background-color: ${props => props.theme.colors.tertiary};
color: ${props =>props.theme.colors.white};
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 12px 20px;
animation: ${animate} .5s;
@media(max-width: 770px){
        display: flex;
        width: 100%;
        >header { 
        >h1{
                font-size:26px;
                
        }

    }

    }




>header img {
    margin-left: 7px;
    width: 35px;
}
>header p {
   align-items: center;
   justify-content: center;
   margin-top: 59px;
    font-size: 18px;
}

`;
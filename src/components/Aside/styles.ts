
import { hover } from "@testing-library/user-event/dist/hover";
import { text } from "stream/consumers";
import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    .DASHBOARD{
    font-weight: bold;
    padding: 20px;
    margin-right: 4px;
}

.exit{
position: absolute;
bottom: 20px;

}


    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.gray};
    a { 
text-decoration: none;
color: ${props => props.theme.colors.white};
margin: 7px 0;
display: flex;
align-items: center;
padding: 6px;
padding-left: 17px;
font-size: 19px;
transition: opacity .3s;

transition: all 0.2s;
&:hover{
    opacity: .7;
    transform: translateX(10px);
}
>svg{
    font-size: 18px;
    margin-right: 5px;
    
}





}

`;
export const Header = styled.header`
display: flex;
align-items: center;
height: 70px;

.nome-logo{
    
  color: ${props => props.theme.colors.white};
    font-family: 'Edu QLD Beginner', cursive;
    font-size: 24px;
}


`;


export const LogImg = styled.img`
height: 40px;
width: 40px;

`;


export const Title = styled.h3`
    color: ${props => props.theme.colors.success}
    

`; 


export const MenuContainer = styled.nav`
display: flex;
flex-direction: column;

margin-top: 50px;

`;
export const MenuItemLink = styled.a``;


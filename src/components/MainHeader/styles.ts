

import styled from 'styled-components';

export const Container = styled.div`
   grid-area: MH;
   color: ${props => props.theme.colors.success};
   background-color: ${props => props.theme.colors.secondary};
   display: flex;
   justify-content: space-between;
    align-items: center;
    text-align: center;

    .sair{
     color: ${props => props.theme.colors.white};
    right: 20px;
     font-size: 19px;
     padding: 1px;
     float: right;
     position: absolute;
     padding-left: 60px;
 
    }


    @media(max-width: 770px){
        justify-content: center;




    }
.iconexit{
    padding-top: 5px;

}
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
    box-shadow: 60px -16px teal;

`;



export const Profile = styled.div`
right: 50px;
display: none;
position: absolute;
padding-right: 30px;
color: ${props => props.theme.colors.white};
@media(max-width: 770px){
    display: none;
     
}

`;
export const Welcome = styled.h3`


`;
export const UserName  = styled.span``;
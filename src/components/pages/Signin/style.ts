import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
display: flex;
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.colors.primary};




`;

 export const Logo = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 30px;
 
 >h3{
    color: ${props => props.theme.colors.primary};
    margin-left: 7px;
 }
>h1{
    color:${props => props.theme.colors.white};
}

 >img{
    height: 90px;
    width: 90px;
 }
 `;

 export const Form = styled.form`
  width: 25rem;
  height: 20rem;
  padding: 30px;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.tertiary};




 `;

 export const FormTitle  = styled.h1`
 color: ${props => props.theme.colors.white};
  &:after { 
   content: '';
       display: block;
        width: 55px;
      
        border-bottom: 10px solid ${props => props.theme.colors.success};
  }
 
 
 
 `;
import styled,{keyframes} from 'styled-components';
const animate = keyframes`
 0% {
transform: translate(-200px);
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
const animate2 = keyframes`
 0% {
transform: translate(200px);
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
height: 100vh;
display: flex;
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.colors.primary};


@media(max-width: 600px){
   height: 100%;
   overflow-y: hidden;
   overflow-x: hidden;
   .bannner{
      margin-top: 0rem;
width: 100%;
margin-bottom: -20px;
height: 320px;
position: relative;
top:0px;
font-size: 20px;
padding: 0;

   }


   .texto{

font-size: 22px;
color: #fff610;
}
.big-text {
   font-size: 32px;

}




}
`;

 export const Logo = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 30px;
 animation: ${animate} .5s;

 @media(max-width: 600px){
   margin-top: 10px



 }
 >h3{
    color: ${props => props.theme.colors.primary};
    margin-left: 0px;
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
  width: 400px;
  height: 300px;
  padding: 30px;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.tertiary};

  


 `;

 export const FormTitle  = styled.h1`
 color: ${props => props.theme.colors.white};
 animation: ${animate2} .5s;
  &:after { 
  
   content: '';
       display: block;
        width: 55px;
        
        border-bottom: 10px solid ${props => props.theme.colors.success};
  }
 
 
 
 `;
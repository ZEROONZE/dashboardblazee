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
 @media(max-width: 700px){
    flex-direction: column;
    display: grid;
   


   .balao{

    flex-direction: column;
    display: grid;
   float: flex;

   }




}
 .redaa{


color: rgb(255, 255, 255);
width: 100px;
height: 60px;
border-radius: 7px;
font-weight: bold;
font-size: 25px ;
padding: 8px;
align-items: center;
text-align: center;
box-shadow: 1px 1px 1px  rgba(0, 0, 0, 0.751);
border: 6px solid rgb(251, 0, 0);
background-color: rgb(251, 0, 0);
 }
.redaaa{

cursor: pointer;
color: rgb(255, 255, 255);
width: 100px;
height: 60px;
border-radius: 7px;
font-weight: bold;
font-size: 25px ;
padding: 8px;
font-size: 20px;
align-items: center;
text-align: center;
box-shadow: 1px 1px 1px  rgba(0, 0, 0, 0.751);
border: 6px solid #000;
background-color: rgba(0, 0, 0, 0.751);
 }
 .seta{
font-size: 70px;
color:#fff;
align-items: center;
padding: 10px;
padding-left: 10px;
justify-content: space-around;
cursor: pointer;
 }
.seta:hover{
color: #000;
font-size: 72px;


}


 .One{
    animation: ${animate} .5s;
    display: flex;
flex-direction: row;
padding: 7px;



 }
 .One p {
    margin: 7px;
 }
 

 .balao{
    background:${props => props.theme.colors.white}; 
    padding:15px; 
    color: ${props => props.theme.colors.black}; 
    position:relative; 
    top:4px; 
    left:60px; 
    width:50%; 
    float:left; 
    border-radius: 19px;
    animation: ${animate} .5s;
}
.balao:before{
     content:''; 
     position: absolute; 
     width:20px; 
     height:20px; 
     left:-10px; 
     top:25px; 
     background:${props => props.theme.colors.white}; 
     -webkit-transform:rotate(45deg); }




@media(min-width: 700px){


}




 `;
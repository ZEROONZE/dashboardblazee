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


export const Container = styled.div`
display: none;

width: 100%;

.titlemobile{
   top:3px;
   position: fixed;
}
.title1mobile{

 justify-content: center;
 margin: auto;
 font-size: 17px;
 color: #fff;
 padding: 9px;
align-items: center;
text-align: center;
}
@media(max-width: 600px){
  max-height: 60%;
   grid-template-columns: 100%;
      
        grid-template-areas:
        'MH'
        'CT';


        width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
 margin-top:4%;
 overflow-y: scroll;
 max-height : 70%;

   .boxmobile{
      width: 100%;
     
   }
   display: block;
   .buttonmobile{

width: 50px;
position: fixed;
bottom:75px;
right: 40px;
height: 20px; 
font-size: 3rem; 
z-index: 1; 
cursor: pointer; 
color: red; 
background-color: transparent;
text-decoration: none;

}

.tabelamobile{
 
   box-shadow: 0px, 0px, 3px rgba(rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), alpha);
  border-collapse: collapse;
width: 100%;
justify-content: center;

   
}
.tabelamobile th, 
.tabelamobile td {
padding: 2px 10px;
border: 1px solid #50545a;

text-align: center;
justify-content: center;
align-items: center;

}

td{
  font-size: 15px;
  padding: 3px 7px;
  padding-left: 5px;
  text-align: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  position: relative;

}



.bottom2{

position: fixed;
bottom:48px;
left: 37px;

font-size: 18px; 
z-index: 1; 
border-radius: 10px;
cursor: pointer; 
background-color: #000; 
padding: 10px 7px; 
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: #fff;
text-decoration: none;
}

.button-27:disabled {
  pointer-events: none;
}

.bottom2:hover {
   box-shadow: rgba(0, 0, 0, 0.25) 0 5px 10px;
  transform: translateY(-1px);
}

.buttonmobile:active {
   box-shadow: rgba(0, 0, 0, 0.25) 0 5px 10px;
  transform: translateY(-1px);
}


.reda1mobile{
  
   color: rgb(255, 255, 255);
width: 69px;
 height: 51px;
 text-align: center;
 justify-content: center;
 margin: auto;
 border-radius: 7px;
font-weight: bold;
 font-size: 19px ;
 justify-content: center;
align-items: center;
padding-top:13px;
box-shadow: 1px 1px 1px  rgba(0, 0, 0, 0.751);
background-color: #000;
  
}



.reda1numero{

text-align: center;
align-content: center;
align-items: center;
justify-content: center;
position: relative;
-webkit-text-stroke-color: #000;
font-size: 18px; color: #000000;
font-size: 18px; 
font-weight: bold;
}


.rednumero{

color: red;
-webkit-text-stroke-color: rgb(255, 0, 0);
font-size: 18px; 
 text-align: center;
align-content: center;
align-items: center;
justify-content: center;
position: relative;
font-weight: bold;
}
.reda2numero{
font-family: sans-serif;
-webkit-text-stroke-width: 1px;

font-size: 18px; color: #ffffff;
}

.redamobile{


color: rgb(255, 255, 255);
width: 69px;
 height: 51px;
 text-align: center;
 justify-content: center;
 margin: auto;
 border-radius: 7px;
font-weight: bold;
 font-size: 19px ;
 justify-content: center;
align-items: center;
padding-top:13px;
box-shadow: 1px 1px 1px  rgba(0, 0, 0, 0.751);

background-color: rgb(251, 0, 0);
 


}

.reda1:hover, .reda2:hover, .reda:hover {
opacity: 0.7;
cursor: pointer;
margin-left: 1px;
transition: 0.3s;
}

.reda2mobile{
font-family: sans-serif;
width: 69px;
 height: 51px;
padding-top: 6px;
font-weight: bold;
 border-radius:7px;
 border: 6px solid rgb(255, 255, 255);
color: rgb(0, 0, 0);
 margin: auto;
background-color: rgb(255, 255, 255);
 text-align: center;
font-size: 19px ;
}














}



`;




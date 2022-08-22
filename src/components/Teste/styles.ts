import styled, { keyframes} from "styled-components";
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

.calendario{
    width: 140px;
    float: right;
    height: 30px;
    border-radius: 30px;
    padding: 15px;
    font-size: 17px;

}
.DatePicker{
    float: right;
    
}
.tabela1{
    padding-top: 80px;
  
}
.tabela2{
    width: 100%;
  height: 100%;
 
  display: flex;
 
 margin-top:4%;
 overflow-y: hidden;
 overflow-x: scroll;
 max-height : 90%;

 border-radius: 8px;
 div{
    padding: 4px;
 }
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
.reda22numero{
font-family: sans-serif;
-webkit-text-stroke-width: 1px;

font-size: 18px; color: #ffffff;
}

.redaa{

  animation: ${animate} .5s;
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
.botao-mover{
  margin-bottom: 80px;
  text-align: center;
  align-items: center;
  margin: auto;
  padding: 20px;
}
.control-next {
    width: 70px;
    height: 50px;
  text-align: center;
  padding-top: 5px;
 
   margin: 3px;
   transition: transform 0.24s cubic-bezier(0.075, 0.82, 0.165, 1); 
    background: #e3262e;
    color: #fff;
    font-size: 30px;
    font-weight: 200;
    border-radius: 10px;
    cursor: pointer;
}

.control-next:hover {
    background: #ffbc4a;
    width: 73px;
    height: 50px;
    font-size: 30px;
    animation: blink 2s ease-in-out infinite;
}

.datatime{
align-items: center;
text-align: center;
position: relative;
padding: 8px;
}
.reda11{
  animation: ${animate} .5s;
color: rgb(255, 255, 255);
width: 100px;
  height: 60px;
  border-radius: 7px;
font-weight: bold;
  font-size: 25px;
  padding: 8px;
align-items: center;
text-align: center;
box-shadow: 1px 1px 1px  rgba(0, 0, 0, 0.751);
background-color: #000;
border: 6px solid rgba(0, 0, 0, 0.751);
}
.reda11:hover, .reda2:hover, .reda:hover {
opacity: 0.7;
cursor: pointer;
margin-left: 1px;
transition: 0.3s;
}

.reda22{
  animation: ${animate} .5s;
font-family: sans-serif;
width: 100px;
  height: 60px;
  border-radius: 7px;
font-weight: bold;
  font-size: 25px ;
  padding: 8px;
align-items: center;
text-align: center;
  border: 6px solid rgb(255, 255, 255);
color: rgb(0, 0, 0);
  
background-color: rgb(255, 255, 255);
  text-align: center;

}
::-webkit-scrollbar{
  width: 10px;
height: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color:#fff;}

::-webkit-scrollbar-track {
  
  background-color: rgba(0, 0, 0, 0.472);
}

`;

export const DatePicker = styled.div`

float: right;
`;
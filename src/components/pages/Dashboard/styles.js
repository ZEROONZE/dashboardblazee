import styled from "styled-components";

export const Container = styled.div`

.tabela{
    justify-content: center;
align-items: center;
margin-top: 40px;
margin-bottom: 20px;
justify-content: center;
align-items: center;
margin: auto;
    
}
.title1{
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
}
.tabela1{
    display: grid;
grid-template-columns: repeat(9, 100px);
text-align: center;
gap: 50px;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 40px;

}
.fundo4{
    display: flex;
    flex-direction: column;
}
width: 100%;
height: 100%;


@media(max-width: 700px){
  max-height: 60%;
  
  .tabela1{
    display: grid;
grid-template-columns: repeat(3, 80px);
text-align: center;
gap: 30px;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 40px;
max-width: 60%;


}
.fundo4{
    display: flex;
    flex-direction: column;
}
}

.bottom2{
margin-bottom: 18px;
margin-top: 18px;
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


.bottom2:hover {
   box-shadow: rgba(0, 0, 0, 0.25) 0 5px 10px;
  transform: translateY(-1px);
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
position: relative;
z-index: 1;

}
.reda11{


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
.reda22{
 

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


.nome{
border: 2px solid rgb(161,196,66);
border-radius: 50%;
    height: 70px;
    width: 70px;
 position: absolute;
}

.button-bottom{

width: 50px;
position: fixed;
top:5px;
justify-content: center;
align-items: center;
text-align: center;
margin: auto;
left:67%;
height: 20px; 
font-size: 3rem; 
z-index: 1; 
cursor: pointer; 
color: red; 
background-color: transparent;
text-decoration: none;
z-index: 1000;
}


`;
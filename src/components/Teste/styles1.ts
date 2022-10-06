import styled from "styled-components";



export const ContentHeader1 = styled.div`


`;



export const Container = styled.div`
overflow-y: hidden;
height: 100%;
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
margin: auto;
z-index: 1;

}
.reda22{
  
  font-family: sans-serif;
  width: 80px;
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
  margin: auto;
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
  justify-content: center;
  box-shadow: 1px 1px 1px  rgba(0, 0, 0, 0.751);
  background-color: #000;
  border: 6px solid rgba(0, 0, 0, 0.751);
  margin: auto;
  }



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
`;
export const Content = styled.div`
display: grid;
align-items: center;
justify-content: center;
max-height: 90%;
margin-top: -10px;
text-align: center;
.tabela1{
    display: grid;
    max-width: 1500px;
    height: 85vh;
    max-height: 80%;
    overflow-y: auto;
    max-width: 140%;
    text-align: center;
    align-items: center;
    ::-webkit-scrollbar{
  width: 10px;
  margin: 29px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color:#fff;}

::-webkit-scrollbar-track {
  
  background-color: rgba(0, 0, 0, 0.472);
} 
}

.tabela2{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
text-align: center;
gap: 19px;
padding: 29px;

width: 100%;

text-align: center;
align-items: center;
justify-content: center;
max-height: 100vh;

}
.datatime{
  margin-left: -5px;
  padding-left: -1px;

}
.mostrar{
 font-size: 10px;
 margin-top:-10px;
 margin-left: 0px;
 padding-left: 0px;
 text-align: center;
 align-items: center;
 justify-content: center;
    cursor: pointer;
}
@media(max-width: 700px){
  max-height: 100%;
  overflow-x: hidden;
.tabela1{
    display: grid;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    max-width: 100%;
    width: 400px;
    align-items: center;
text-align: center;
margin: 29px;
::-webkit-scrollbar{
  width: 10px;
 padding: 30px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color:#fff;}

::-webkit-scrollbar-track {
  
  background-color: rgba(0, 0, 0, 0.472);
} 
  }
  .tabela2{
    display: grid;
grid-template-columns: repeat(3, 70px);
text-align: center;
gap: 30px;
justify-content: center;
align-items: center;
margin: auto;

max-height: 100%;
max-width: 100%;
align-items: center;
text-align: center;
}
}

.redaa{

color: rgb(255, 255, 255);
width: 80px;
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

z-index: 1;

}
.reda11{
  
color: rgb(255, 255, 255);
width: 80px;
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
width: 80px;
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



.nomes{
background-color: white;

    z-index: 100;


}
.datatime{
  margin-left: 4px;
  padding-left: 3px;

}
.mostrar{
 font-size: 10px;
 margin-top:-10px;
 margin-left: 4px;
 padding-left: 3px;
 text-align: center;
 align-items: center;
 justify-content: center;
    cursor: pointer;
}


.mostrar:hover{
        background-color: #000;
    display: block;
}
`;
import styled from "styled-components";


export const Container = styled.div`
.texto-geral,.texto-segundario {
    text-align: center;
    padding: 10px;

}

.banner {
  width: 100%;
  background:url("http://s6.favim.com/orig/150112/background-cold-gif-nature-Favim.com-2380226.gif");
  /*https://i0.wp.com/media.giphy.com/media/5ERaOy5fQEIAU/giphy.gif*/
  background-size: cover;
  font-size: 50px;
  z-index: 10 ;
  color: #fff;
  text-align: center;
  padding: 10px 5px;
  margin-bottom:3px;
  border-radius: 20px;
}

.bannner{
margin-top: 1rem;
width: 100%;
height: 320px;
position: relative;
top:0px;
}
.texto{

font-size: 32px;
color: #fff610;
}
.big-text {
  font-size: 70px;
  font-weight:800;
  animation-delay: 1s;
  color: #fff610;
}

.botunP{

    text-align: center;
}
.botun{
  display: inline-block;
  text-align: center;
  justify-content: center;
  margin:auto;
  background: green;
  color: #36465d;
  text-transform: uppercase;
  padding: 15px;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  transition: .3s;
  margin-top: 10px;
  color: #fff;
  border-radius: 18px;
  box-shadow: 1px 1px 
  1px  1px #000;
}
.botun:hover {
   background-color: #fff610;
  color: #000;
  padding: 15px 20px;
}
.pagamento2{
   border-bottom: 10px solid green;
 font-size: 17px;
   color: #fff;
   font-weight: bold;
   text-decoration: none;
   background: green;
  padding: 15px;
  border-radius: 20px;
cursor: pointer;
align-items: center;
text-align: center;
justify-content: center;
}
.texto-geral h1{
  font-size: 20px;
    margin-bottom: 12px;

}
.texto-geral p {
font-size: 18px;
padding: 4px;

}
.texto-segundario p {

    font-size: 18px;
padding: 4px;

}
.greenfoto{
  justify-content: center;
  align-items: center;
  text-align: center;
    border-radius: 20px;
}
.grupofree{
    font-size: 14px;
    text-decoration: none;
  justify-content: space-between;
    flex-direction: row;
    padding: 10px;
    color: #FFF;
}

.whatsapp_float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 60px;
          right: 60px;
          background-color: #6495ed;
          color: #FFF;
          border-radius: 50%;
          text-align: center;
          font-size: 30px;
          box-shadow: 2px 2px 2px #000 solid;
          z-index: 100;
          text-decoration: none;
      }
      .whatsapp-icon {
          margin-top: 16px;
      }
      @media screen and (max-width: 767px) {
          .whatsapp-icon {
              margin-top: 10px;
          }

         

          .whatsapp_float {
              width: 40px;
              height: 40px;
              bottom: 20px;
              right: 10px;
              font-size: 22px;
          }
      }

`;
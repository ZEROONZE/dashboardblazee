import styled from "styled-components";


export const Container = styled.div`


> select {
   padding: 7px 10px;
   border-radius: 5px;
   background-color: ${props => props.theme.colors.secondary};
   margin-left: 7px;
   color:${props => props.theme.colors.white};
   font-family: 'Courier New', Courier, monospace;
   font-size: 25px;
   cursor: pointer;
   border: 1px #D2D2D2 solid;
   
}


`;

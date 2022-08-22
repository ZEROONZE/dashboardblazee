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
  .calendario1{
    width: 140px;
    float: right;
    height: 30px;
    border-radius: 30px;
    padding: 15px;
    font-size: 17px;

}
.DatePicker1{
    float: right;
}
    


`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 20px;
    
    
`;


export const Contentt = styled.span``;

import styled from "styled-components";
interface ILegendProps{

    color: string;

}

export const Container = styled.div`
width: 40%;
height: 300px;
margin:  30px 0;
padding: 0px 10px;
background-color: ${props => props.theme.colors.tertiary};
color: #d3d3d3;
border-radius: 7px;
display: flex;
font-weight: bold;
`;


export const SlideLeft = styled.aside`
padding: 30px 20px;

>h2{
    margin-bottom: 20px;

}
`;
export const LegendContainer = styled.ul`
list-style: none;
`;
export const Legend = styled.li<ILegendProps>`
align-items:  center;
display: flex;
margin-top: 7px;
padding:10px 20px;
> div {
background-color: ${props => props.color};
width: 45px;
height: 45px;
border-radius: 5px;
font-size: 18px;
line-height: 45px;
text-align: center;
}

>span{
    margin-left: 5px;
}


`;
export const SideRight = styled.main`
  display: flex;
 flex: 1;
  justify-content: center;


`;
import styled from "styled-components";


interface ITagProps{
    color: string;
}

export const Container = styled.li`
background-color: ${props => props.theme.colors.tertiary};
list-style: none;
border-radius: 10px;
margin: 10px;
color: #d3d3d3;
    font: bold;
padding: 12px 0px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
align-items: center;
text-align: center;
justify-items: center;

transition: all .3s;



&:hover{
    opacity: .7;
    transform: translateX(10px);
}
position: relative;



> div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 16px;



    }
    >h3{
    margin-right: 13px;
  
}

    > div span {
       align-items: center;
       text-align: center;
       justify-content: center;
        font-weight: bold;
        font-size: 24px;
        z-index: 1;
        position: relative;
       
        color: #d3d3d3;
    font: bold;
    }

    div small{
        padding-left: 19px;
        font-weight: 500;
    }
`;
export const Tag = styled.div<ITagProps>`
position: absolute;
background-color: ${props => props.color};
width: 50px;
height: 100%;
left: 0;
color: #d3d3d3;
    font: bold;
border-top-right-radius: 13px;
border-bottom-right-radius:13px ;
border-radius: 4px;
`;

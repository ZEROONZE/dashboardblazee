import styled from "styled-components";


interface ITagProps{
    color: string;
}

export const Container = styled.li`
background-color: ${props => props.theme.colors.tertiary};
list-style: none;
border-radius: 10px;
margin: 10px;
padding: 12px 0px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
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

    > div span {
        padding-left: 10px;
        font-weight: 500;
        font-size: 19px;
    }

    div small{
        padding-left: 10px;
    }
`;
export const Tag = styled.div<ITagProps>`
position: absolute;
background-color: ${props => props.color};
width: 14px;
height: 100%;
left: 0;
border-top-right-radius: 13px;
border-bottom-right-radius:13px ;
border-radius: 4px;
`;

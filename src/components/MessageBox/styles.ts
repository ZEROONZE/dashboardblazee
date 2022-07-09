import styled from "styled-components";

export const Container = styled.div`
width: 32%;
margin-top: 30px;
height: 260px;
background-color: ${props => props.theme.colors.tertiary};
color: ${props =>props.theme.colors.white};
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 12px 20px;
>header img {
    margin-left: 7px;
    width: 35px;
}
>header p {
    font-size: 18px;
}

`;
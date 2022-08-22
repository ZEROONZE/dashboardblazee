import styled from 'styled-components';
import Switch, {ReactSwitchProps}  from 'react-switch';




export const Container = styled.div`
   margin-left: 5rem;
display: flex;
align-items: center;

@media(max-width:700px){
    margin-left: 0rem;
    
}

.dark-light{
        font-family: 'Edu QLD Beginner', cursive;
    }
`;


export const ToggleLabel = styled.span`
color: ${props => props.theme.colors.info};
width: 30px;
 

    `;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({theme}) => ({   
     onColor: theme.colors.gray,
     offColor: theme.colors.warning

    }))<ReactSwitchProps>`
    margin: 0 7px;
   
    .dark-light{
        font-family: 'Edu QLD Beginner', cursive;
    }

`;

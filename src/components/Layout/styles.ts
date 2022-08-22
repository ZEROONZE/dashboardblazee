import styled from 'styled-components';

/**
* Layout
* MH = Main Header
* AS = Aside
* CT = Content    
*/

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas:
     'MH MH'
     'CT CT';
     width: 100%;
     margin: 0;
     height: 100%;

    @media(max-width: 600px){
        width: 100%;
        height: 100%;
        grid-template-columns: 100%;
 
        grid-template-areas:
        'MH'
        'CT';
           

    }

    `;
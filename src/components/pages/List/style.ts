import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;
export const HistoryFinanceCard = styled.div``;

export const Filters = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 30px;
.tag-filter{
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${props => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity .3s;
    border-radius: 6px;
    opacity: 0.3;
    &:hover{
        opacity: .7;
    }
   


    

}

    .tag-filter-red::after{
        content: '';
        display: flex;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid red;
        border-radius: 5px;
    }
    .tag-filter-black::after{
        content: '';
        display: flex;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid black;
        border-radius: 5px;

    }
    .tag-actived{
            opacity: 1;
    }


`;

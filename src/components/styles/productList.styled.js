import styled from 'styled-components';

export const ProductListContainer = styled.div`
padding: 20px;
color: ${props=> props.theme.colors?.darkBlue};
background-color:${props=>props.theme.colors?.lightBlue};
`

export const ProductListGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`

export const ProductListTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
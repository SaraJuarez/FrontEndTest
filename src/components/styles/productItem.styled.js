import styled from 'styled-components';


export const ProductItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props=>props.theme.colors?.navBlue};
    border-radius: 15px;
    padding: 15px;
    color: ${props=>props.theme.colors?.darkBlue};
    font-family: ${props=>props.theme.fonts[0]};
`
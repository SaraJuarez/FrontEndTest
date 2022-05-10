import styled from 'styled-components';

export const NavContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.theme.colors?.mediumBlue};
    color: ${props=> props.theme.colors?.violet}
`

/* Ejemplo variables generables */
/* const Container = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme.colors.onyx}`};
  background-color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts[0]};
`; */
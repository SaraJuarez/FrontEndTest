import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors?.mediumBlue};
  color: ${(props) => props.theme.colors?.violet};
  border-bottom: 1px solid ${(props) => props.theme.colors?.darkBlue};
  padding: 0px 15px;
`;

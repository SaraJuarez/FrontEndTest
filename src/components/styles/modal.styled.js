import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 154, 211, 0.5);
  box-shadow: 0px 0px 24px rgba(128, 154, 211, 0.25);
  z-index: 3;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledModalSubcontainer = styled.div`
  width: 50%;
  height: fit-content;
  border-radius: 16px;
  background: white;
  padding: 20px;
  padding-top: 24px;
`;

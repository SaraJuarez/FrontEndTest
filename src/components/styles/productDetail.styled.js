import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors?.lightBlue};
`;
export const StyledProductDetailText = styled.div`
  margin-left: 10%;
  height: 400px;
  overflow-y: scroll;
  color: ${(props) => props.theme.colors?.darkBlue};
  @media screen and (max-width: 1050px) {
    height: 300px;
  }
  @media screen and (max-width: 950px) {
    height: 250px;
  }
  @media screen and (max-width: 850px) {
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;

export const LinkContainer = styled.div`
  position: fixed;
  top: 25%;
  left: 15px;
  background-color: ${(props) => props.theme.colors?.darkBlue};
  border-radius: 50%;
  padding: 25px 10px;
  color: white;
  @media screen and (max-width: 800px) {
    padding: 20px 6px;
  }
  @media screen and (max-width: 600px) {
    padding: 16px 4px;
  }
  @media screen and (max-width: 450px) {
    padding: 14px 2px;
    top: 35%;
    font-size: 12px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: "none";
  color: "#caf0f8";
`;

export const ProductDetailAll = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 15px;
  border-radius: 15px;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const ProductDetailInfoActions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  @media screen and (max-width: 600px) {
    /*     flex-direction: column;
    align-items: flex-start; */
  }
`;

export const CircularProgressDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const FakeButton = styled.div`
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors?.darkBlue};
  text-align: center;
  color: white;
  opacity: 0.4;
  padding: 10px 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 30%;
  box-shadow: 5px 0px 15px 0px #000000;
  cursor: not-allowed;
`;

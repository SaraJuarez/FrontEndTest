import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageProduct from "../../components/atoms/ImageProduct";
import { getMobileInfo } from "../../utils/api/api";
import {
  ProductDetailContainer,
  ProductDetailInfoActions,
  ProductDetailAll,
  LinkContainer,
  SelectsContainer,
  StyledProductDetailText,
  CircularProgressDiv,
} from "../../components/styles/productDetail.styled";
import Select from "../../components/atoms/select/Select";
import Button from "../../components/atoms/button/Button";
import ProductDetailText from "../../components/atoms/productDetailText/ProductDetailText";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductDetail(props) {
  const { id } = useParams();
  const [mobileDetails, setMobileDetails] = useState();
  const {
    getSelectOption,
    getCartInfo,
    getSelectDefault,
    setDetailId,
    setSelectedOption,
  } = props;
  let navigate = useNavigate();

  const getMobileDetails = async () => {
    let info = await getMobileInfo(id);
    if (info === null) {
      window.alert("An error ocurred");
      navigate("/");
    } else {
      let colorDefault = info.options.colors[0].code;
      let storageDefault = info.options.storages[0].code;
      let newObjectDefault = {
        id: info.id,
        color: colorDefault,
        storage: storageDefault,
      };
      setSelectedOption(newObjectDefault);
      setMobileDetails(info);
    }
  };

  useEffect(() => {
    setDetailId(id);
    getMobileDetails();
  }, []);

  return (
    <ProductDetailContainer>
      <Link style={{ textDecoration: "none", color: "#caf0f8" }} to="/">
        <LinkContainer>Go back</LinkContainer>
      </Link>
      <ProductDetailAll>
        <ImageProduct image={mobileDetails?.imgUrl} />
        <ProductDetailInfoActions>
          <StyledProductDetailText>
            {mobileDetails !== undefined ? (
              Object.keys(mobileDetails).map((item, i) => {
                return (
                  <ProductDetailText
                    key={i}
                    type={item}
                    info={mobileDetails[item]}
                  />
                );
              })
            ) : (
              <CircularProgressDiv>
                <CircularProgress />
              </CircularProgressDiv>
            )}
          </StyledProductDetailText>
          <SelectsContainer>
            <Select
              onChangeFunction={getSelectOption}
              options={mobileDetails?.options.colors}
              getSelectDefault={getSelectDefault}
              name="color"
            />
            <Select
              onChangeFunction={getSelectOption}
              options={mobileDetails?.options.storages}
              getSelectDefault={getSelectDefault}
              name="storage"
            />
          </SelectsContainer>
        </ProductDetailInfoActions>
      </ProductDetailAll>
      <Button onClickFunction={getCartInfo} text="Add" />
    </ProductDetailContainer>
  );
}

export default ProductDetail;

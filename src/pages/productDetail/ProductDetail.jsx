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
  StyledLink,
  FakeButton,
} from "../../components/styles/productDetail.styled";
import Select from "../../components/atoms/select/Select";
import Button from "../../components/atoms/button/Button";
import ProductDetailText from "../../components/atoms/productDetailText/ProductDetailText";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  isAlreadyInSelected,
  saveMobileDetails,
  informationAlreadyPresent,
} from "../../utils/cache";

function ProductDetail(props) {
  const { id } = useParams();
  const [mobileDetails, setMobileDetails] = useState();
  const [isAlreadySelected, setAlreadySelected] = useState(false);
  const {
    getSelectOption,
    getCartInfo,
    getSelectDefault,
    setDetailId,
    setSelectedOption,
  } = props;
  let navigate = useNavigate();

  const getMobileDetails = async () => {
    let isAlreadyInCart = isAlreadyInSelected(id);
    setAlreadySelected(isAlreadyInCart);
    let info = await getMobileInfo(id);
    saveMobileDetails(info);
    if (info.isAxiosError) {
      window.alert(info.message);
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
    if (localStorage.getItem("mobileDetails") === null) {
      getMobileDetails();
    } else {
      let infoInCache = informationAlreadyPresent(id);
      if (infoInCache === undefined) {
        getMobileDetails();
      } else {
        let isAlready = isAlreadyInSelected(id);
        setAlreadySelected(isAlready);
        setMobileDetails(infoInCache);
        let newObjectDefault = {
          id: infoInCache.id,
          color: infoInCache.options.colors[0].code,
          storage: infoInCache.options.storages[0].code,
        };
        setSelectedOption(newObjectDefault);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductDetailContainer>
      <StyledLink style={{ textDecoration: "none", color: "#caf0f8" }} to="/">
        <LinkContainer>Go back</LinkContainer>
      </StyledLink>
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
      {!isAlreadySelected ? (
        <Button onClickFunction={getCartInfo} text="Add" />
      ) : (
        <FakeButton>You have already add this phone</FakeButton>
      )}
    </ProductDetailContainer>
  );
}

export default ProductDetail;

import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "../../components/atoms/button/Button";
import ImageProduct from "../../components/atoms/imageProduct/ImageProduct";
import ProductDetailText from "../../components/atoms/productDetailText/ProductDetailText";
import Select from "../../components/atoms/select/Select";
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
import { getMobileInfo, setMobileInfo } from "../../utils/api/api";
import {
  isAlreadyInSelected,
  saveMobileDetails,
  informationAlreadyPresent,
} from "../../utils/cache";
import { setSelectedPhones } from "../../utils/cache";

function ProductDetail(props) {
  const { setCartItems, cartItems, setDetailId } = props;
  const { id } = useParams();
  const [mobileDetails, setMobileDetails] = useState();
  const [isAlreadySelected, setAlreadySelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    id: "",
    color: "",
    storage: "",
  });

  let navigate = useNavigate();

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

  const handleSelect = (selected) => {
    if (selected !== null) {
      let selectedName = Object.keys(selected)[0];
      let selectedValue = Object.values(selected)[0];
      setSelectedOption((prev) => ({ ...prev, [selectedName]: selectedValue }));
    }
  };

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

  const getCartInfo = async () => {
    setSelectedPhones(selectedOption);
    let newObject = selectedOption;
    setSelectedOption(newObject);
    /* The POST method only returns 1, so I prefer to make the sum here */
    let itemsInTheCart = await setMobileInfo(selectedOption);
    debugger;
    if (itemsInTheCart === 1) {
      setCartItems(cartItems + 1);
      navigate("/");
    } else if (itemsInTheCart.isAxiosError) {
      window.alert(itemsInTheCart.message);
    }
  };

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
              onChangeFunction={handleSelect}
              options={mobileDetails?.options.colors}
              name="color"
            />
            <Select
              onChangeFunction={handleSelect}
              options={mobileDetails?.options.storages}
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

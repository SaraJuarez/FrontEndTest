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
} from "../../components/styles/productDetail.styled";
import Select from "../../components/atoms/select/Select";
import Button from "../../components/atoms/button/Button";
import ProductDetailText from "../../components/atoms/productDetailText/ProductDetailText";
import { Link } from "react-router-dom";
function ProductDetail(props) {
  const { id } = useParams();
  const [mobileDetails, setMobileDetails] = useState();
  const { getSelectOption, getCartInfo, getSelectDefault, setDetailId } = props;

  const getMobileDetails = async () => {
    let info = await getMobileInfo(id);
    setMobileDetails(info);
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
            {mobileDetails !== undefined
              ? Object.keys(mobileDetails).map((item, i) => {
                  return (
                    <ProductDetailText type={item} info={mobileDetails[item]} />
                  );
                })
              : null}
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
      <Button onClickFunction={() => getCartInfo(id)} text="Add" />
    </ProductDetailContainer>
  );
}

export default ProductDetail;

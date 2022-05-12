import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageProduct from "../components/atoms/ImageProduct";
import { getMobileInfo } from "../utils/api/api";
import {
  ProductDetailContainer,
  ProductDetailText,
  ProductDetailInfoActions,
  ProductDetailAll,
  LinkContainer,
  SelectsContainer,
  Span,
} from "../components/styles/productDetail.styled";
import Select from "../components/atoms/Select";
import Button from "../components/atoms/Button";
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
          <ProductDetailText>
            <p>
              <Span>Brand:</Span>
              {mobileDetails?.brand}
            </p>
            <p>
              <Span>Model:</Span>
              {mobileDetails?.model}
            </p>
            <p>
              <Span>Price</Span>
              {mobileDetails?.price}
            </p>
            <p>
              <Span>CPU:</Span>
              {mobileDetails?.cpu}
            </p>
            <p>
              <Span>RAM:</Span>
              {mobileDetails?.ram}
            </p>
            <p>
              <Span>OS:</Span>
              {mobileDetails?.os}
            </p>
            <p>
              <Span>Screen resolution:</Span>
              {mobileDetails?.displayResolution}
            </p>
            <p>
              <Span>Battery:</Span>
              {mobileDetails?.battery}
            </p>
            <p>
              <Span>Camera:</Span>
              {mobileDetails?.primaryCamera[0]}
            </p>
            <p>
              <Span>Dimensions:</Span>
              {mobileDetails?.dimentions}
            </p>
            <p>
              <Span>Weight:</Span>
              {mobileDetails?.weight}
            </p>
          </ProductDetailText>
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

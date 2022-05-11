import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageProduct from "../components/atoms/ImageProduct";
import { getMobileInfo } from "../utils/api/api";
import {
  ProductDetailContainer,
  ProductDetailText,
} from "../components/styles/productDetail.styled";
import Select from "../components/atoms/Select";
import Button from "../components/atoms/Button";

function ProductDetail(props) {
  const { id } = useParams();
  const [mobileDetails, setMobileDetails] = useState();
  const { getSelectOption, getCartInfo, getSelectDefault } = props;

  const getMobileDetails = async () => {
    let info = await getMobileInfo(id);
    console.log(info);
    setMobileDetails(info);
  };

  useEffect(() => {
    getMobileDetails();
  }, []);

  return (
    <ProductDetailContainer>
      <div>
        <ImageProduct image={mobileDetails?.imgUrl} />
      </div>
      <ProductDetailText>
        <div>
          <p>Brand:{mobileDetails?.brand}</p>
          <p>Model:{mobileDetails?.model}</p>
          <p>Price:{mobileDetails?.price}</p>
          <p>CPU:{mobileDetails?.cpu}</p>
          <p>RAM:{mobileDetails?.ram}</p>
          <p>OS:{mobileDetails?.os}</p>
        </div>
        <div>
          <p>Screen resolution:{mobileDetails?.displayResolution}</p>
          <p>Battery:{mobileDetails?.battery}</p>
          <p>Camera:{mobileDetails?.primaryCamera[0]}</p>
          <p>Dimensions:{mobileDetails?.dimentions}</p>
          <p>Weight:{mobileDetails?.weight}</p>
        </div>
        <div>
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
          <Button onClickFunction={() => getCartInfo(id)} text="Add" />
        </div>
      </ProductDetailText>
    </ProductDetailContainer>
  );
}

export default ProductDetail;

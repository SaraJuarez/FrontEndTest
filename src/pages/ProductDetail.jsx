import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageProduct from "../components/atoms/ImageProduct";
import { getMobileInfo } from "../utils/api/api";

function ProductDetail(props) {
  const { id } = useParams();
  const [mobileDetails, setMobileDetails] = useState();
  console.log(localStorage.getItem("list"));

  const getMobileDetails = async () => {
    let info = await getMobileInfo(id);
    console.log(info);
    setMobileDetails(info);
  };

  useEffect(() => {
    getMobileDetails();
  }, []);

  return (
    <div>
      <div>
        <ImageProduct image={mobileDetails.imgUrl} />
      </div>
      <div>
        <p>Brand:{mobileDetails?.brand}</p>
        <p>Model:{mobileDetails?.model}</p>
        <p>Price:{mobileDetails?.price}</p>
        <p>CPU:{mobileDetails?.cpu}</p>
        <p>RAM:{mobileDetails?.ram}</p>
        <p>OS:{mobileDetails?.os}</p>
        <p>Screen resolution:{mobileDetails?.displayResolution}</p>
        <p>Battery:{mobileDetails?.battery}</p>
        <p>Camera:{mobileDetails?.primaryCamera[0]}</p>
        <p>Dimensions:{mobileDetails?.dimentions}</p>
        <p>Weight:{mobileDetails?.weight}</p>
      </div>
    </div>
  );
}

export default ProductDetail;

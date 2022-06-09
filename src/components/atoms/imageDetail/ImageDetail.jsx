import React from "react";

import { ImageDetailStyled } from "../../styles/imageDetail.styled";

function ImageDetail({ image }) {
  return <ImageDetailStyled alt="product" src={image} />;
}

export default ImageDetail;

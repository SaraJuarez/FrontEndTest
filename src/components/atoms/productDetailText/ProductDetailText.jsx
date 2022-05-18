import { Span } from "../../styles/productDetailText.styled";

function ProductDetailText(props) {
  const { info, type } = props;
  const types = [
    "brand",
    "model",
    "price",
    "cpu",
    "ram",
    "os",
    "displayResolution",
    "battery",
    "primaryCamera",
    "dimentions",
    "weight",
  ];
  let neededType = types.some((element) => element === type);
  let infoToPrint;

  if (neededType) {
    let typeOfData = typeof info;
    if (typeOfData === "object") {
      infoToPrint = info[0];
    } else {
      infoToPrint = info;
    }
  }

  return (
    <div>
      {neededType && (
        <p>
          <Span>{type}:</Span>
          {infoToPrint}
        </p>
      )}
    </div>
  );
}

export default ProductDetailText;

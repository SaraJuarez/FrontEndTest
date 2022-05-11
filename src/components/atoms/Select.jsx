import { Fragment } from "react";
import { SelectStyled } from "../styles/select.styled";

function Select(props) {
  const { options, onChangeFunction, name } = props;

  return (
    <Fragment>
      <SelectStyled name={name} onChange={onChangeFunction}>
        <option value="">{name}</option>
        {options !== undefined &&
          options.map((option, index) => {
            return (
              <option key={index} value={option.code}>
                {option.name}
              </option>
            );
          })}
      </SelectStyled>
    </Fragment>
  );
}

export default Select;

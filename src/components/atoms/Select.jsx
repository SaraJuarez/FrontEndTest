import { Fragment, useEffect } from "react";

function Select(props) {
  const { options, onChangeFunction, name, getSelectDefault } = props;

  return (
    <Fragment>
      <select name={name} onChange={onChangeFunction}>
        <option value="">{name}</option>
        {options !== undefined &&
          options.map((option, index) => {
            return (
              <option key={index} value={option.code}>
                {option.name}
              </option>
            );
          })}
      </select>
    </Fragment>
  );
}

export default Select;

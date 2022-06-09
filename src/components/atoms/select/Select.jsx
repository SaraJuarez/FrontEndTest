import { Fragment, useState, useEffect } from "react";

import { SelectStyled } from "../../styles/select.styled";

function Select(props) {
  const { options, onChangeFunction, name } = props;
  // eslint-disable-next-line
  const [selectedOption, setSelectedOption] = useState(
    options ? options[0] : null
  );

  useEffect(() => {
    onChangeFunction(selectedOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (e) => {
    onChangeFunction({ [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <SelectStyled
        defaultValue={selectedOption}
        name={name}
        onChange={handleSelect}
      >
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

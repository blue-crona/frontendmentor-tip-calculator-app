import { useState } from "react";

const Input = (props) => {
  const { tipParams, validate, isInvalid, handleTipParamsEdit } = props;

  const [customPercentage, setCustomPercentage] = useState(false);

  const handleChange = (value) => {
    handleTipParamsEdit({ ...tipParams, ...value });
  };

  const handlePercentageOnClick = (e) => {
    const percentage = e.target.getAttribute("data-percentage");
    handleChange({ percentage });
    setCustomPercentage(false);
  };

  const handlePercentageOnChange = (e) => {
    const percentage = e.target.value;
    handleChange({ percentage });
    setCustomPercentage(true);
  };

  const handleBillOnChange = (e) => {
    const bill = e.target.value;
    handleChange({ bill });
  };

  const handleNumberOfPeopleOnChange = (e) => {
    const numberOfPeople = e.target.value;
    validate(e.target.value);
    handleChange({ numberOfPeople });
  };

  return (
    <div className="input">
      <div>
        <h2 className="input__header">Bill</h2>
        <input
          className="input__bill"
          type="number"
          onChange={handleBillOnChange}
          value={tipParams.bill}
          min={0}
        ></input>
      </div>
      <div>
        <h2 className="input__header">Select Tip % </h2>
        <div className="input__tip-grid">
          <button
            className=""
            data-percentage={5}
            onClick={handlePercentageOnClick}
          >
            5%
          </button>
          <button
            className=""
            data-percentage={10}
            onClick={handlePercentageOnClick}
          >
            10%
          </button>
          <button
            className=""
            data-percentage={15}
            onClick={handlePercentageOnClick}
          >
            15%
          </button>
          <button
            className=""
            data-percentage={25}
            onClick={handlePercentageOnClick}
          >
            25%
          </button>
          <button
            className=""
            data-percentage={50}
            onClick={handlePercentageOnClick}
          >
            50%
          </button>
          <input
            type="number"
            className=""
            min={0}
            onChange={handlePercentageOnChange}
            placeholder="Custom"
            value={customPercentage ? tipParams.percentage : ""}
          />
        </div>
      </div>
      <div>
        <div className="no-of-people__container">
          <h2 className="input__header">Number of People</h2>
          {isInvalid && <span>Can't be zero</span>}
        </div>
        <input
          className={`input__people ${isInvalid ? "input__invalid" : ""}`}
          type="number"
          min={1}
          onChange={handleNumberOfPeopleOnChange}
          value={tipParams.numberOfPeople}
        ></input>
      </div>
    </div>
  );
};

export default Input;

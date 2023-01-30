import { useState } from "react";

const Input = (props) => {
  const { tipParams, validate, isInvalid, handleTipParamsEdit } = props;

  const [customPercentage, setCustomPercentage] = useState(false);
  const [percentageSelected, setPercentageSelected] = useState();

  const handleChange = (value) => {
    handleTipParamsEdit({ ...tipParams, ...value });
  };

  const handlePercentageOnClick = (e) => {
    const percentage = e.target.getAttribute("data-percentage");
    const key = parseInt(e.target.getAttribute("data-key"));

    handleChange({ percentage });
    setCustomPercentage(false);
    setPercentageSelected((prev) => (prev === key ? undefined : key));
  };

  const handlePercentageOnChange = (e) => {
    const percentage = e.target.value;
    handleChange({ percentage });
    setCustomPercentage(true);
    setPercentageSelected(undefined);
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
            className={`${percentageSelected === 1 ? "selected" : ""}`}
            data-percentage={5}
            data-key={1}
            onClick={handlePercentageOnClick}
          >
            5%
          </button>
          <button
            className={`${percentageSelected === 2 ? "selected" : ""}`}
            data-percentage={10}
            data-key={2}
            onClick={handlePercentageOnClick}
          >
            10%
          </button>
          <button
            className={`${percentageSelected === 3 ? "selected" : ""}`}
            data-percentage={15}
            data-key={3}
            onClick={handlePercentageOnClick}
          >
            15%
          </button>
          <button
            className={`${percentageSelected === 4 ? "selected" : ""}`}
            data-percentage={25}
            data-key={4}
            onClick={handlePercentageOnClick}
          >
            25%
          </button>
          <button
            className={`${percentageSelected === 5 ? "selected" : ""}`}
            data-percentage={50}
            data-key={5}
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

import { useState, useEffect } from "react";

const Inputs = (props) => {
  const { tipParameters, handleTipEdit } = props;
  const [customPercentage, setCustomPercentage] = useState(false);
  const [selectedPercentageId, setSelectedPercentageId] = useState(undefined);
  const percentages = [5, 10, 15, 25, 50];

  const [isValid, setIsValid] = useState();

  const handleChange = (value) => {
    handleTipEdit({ ...tipParameters, ...value });
  };

  useEffect(() => {
    if (tipParameters.percentage === "") {
      setSelectedPercentageId(undefined);
    }
    validate();
  }, [tipParameters]);

  const validate = () => {
    const { persons } = tipParameters;
    const isValid = persons == "" || (persons && persons >= 1);
    setIsValid(isValid);
  };

  const handleBillOnChange = (e) => {
    const bill = e.target.value;
    handleChange({ bill });
  };

  const handleNumberOfPeopleOnChange = (e) => {
    const persons = e.target.value;
    validate(e.target.value);
    handleChange({ persons });
  };

  const handlePercentageOnClick = (e) => {
    const percentage = e.target.getAttribute("data-percentage");
    const key = parseInt(e.target.getAttribute("data-key"));

    handleChange({ percentage });
    setCustomPercentage(false);
    setSelectedPercentageId(key);
  };

  const handlePercentageOnChange = (e) => {
    const percentage = e.target.value;
    handleChange({ percentage });
    setCustomPercentage(true);
    setSelectedPercentageId(undefined);
  };

  return (
    <div className="input">
      <div className="bill">
        <h2 className="input__header">Bill</h2>
        <label htmlFor="input__bill" hidden>
          Bill amount
        </label>
        <input
          id="input__bill"
          className="input__bill input--background-cyan"
          type="number"
          onChange={handleBillOnChange}
          value={tipParameters.bill}
          min={0}
          placeholder="0"
        ></input>
      </div>
      <div>
        <h2 className="input__header">Select Tip %</h2>
        <div className="input__percentage-grid">
          {percentages.map((percentage, index) => {
            return (
              <button
                className={`button ${
                  selectedPercentageId === index ? "active" : ""
                }`}
                data-percentage={percentage}
                data-key={index}
                key={index}
                onClick={handlePercentageOnClick}
              >
                {percentage}%
              </button>
            );
          })}
          <label htmlFor="input__custom-percentage" hidden>
            Custom Percentage
          </label>
          <input
            id="input__custom-percentage"
            className="button input__custom-percentage input--background-cyan"
            type="number"
            min={0}
            onChange={handlePercentageOnChange}
            placeholder="Custom"
            value={customPercentage ? tipParameters.percentage : ""}
          />
        </div>
      </div>
      <div>
        <div className="persons__container">
          <h2 className="input__header">Number of People</h2>
          {!isValid && <span className="input__errors">Can't be zero</span>}
        </div>
        <label htmlFor="input__persons" hidden>
          Number of people
        </label>
        <input
          id="input__persons"
          className={`input__persons input--background-cyan ${
            isValid ? "" : "input__invalid"
          }`}
          type="number"
          min={0}
          placeholder="0"
          onChange={handleNumberOfPeopleOnChange}
          value={tipParameters.persons}
        ></input>
      </div>
    </div>
  );
};

export default Inputs;

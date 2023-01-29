const Input = (props) => {
  const { tipParams, handleTipParamsEdit } = props;

  const handleChange = (value) => {
    handleTipParamsEdit({ ...tipParams, ...value });
  };

  const handlePercentageOnClick = (e) => {
    const percentage = e.target.getAttribute("data-percentage");
    handleChange({ percentage });
  };

  const handlePercentageOnChange = (e) => {
    const percentage = e.target.value;
    handleChange({ percentage });
  };

  const handleBillOnChange = (e) => {
    const bill = e.target.value;
    handleChange({ bill });
  };

  const handleNumberOfPeopleOnChange = (e) => {
    const numberOfPeople = e.target.value;
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
          max={500000}
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
            onChange={handlePercentageOnChange}
            placeholder="Custom"
          />
        </div>
      </div>
      <div>
        <h2 className="input__header">Number of People</h2>
        <input
          className="input__people"
          type="number"
          min={0}
          max={100}
          onChange={handleNumberOfPeopleOnChange}
          value={tipParams.numberOfPeople}
        ></input>
      </div>
    </div>
  );
};

export default Input;

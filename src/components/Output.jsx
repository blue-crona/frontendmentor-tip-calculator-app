const Output = ({ tip, handleResetOnClick }) => {
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  return (
    <div className="output">
      <div>
        <div className="output__tip-amount">
          <span>
            <div>Tip Amount</div>
            <div>/ person</div>
          </span>
          <span className="output__amount">
            {numberFormat(tip.tipPerPerson)}
          </span>
        </div>
        <div className="output__total">
          <span>
            <div>Total</div>
            <div>/ person</div>
          </span>
          <div className="output__amount">
            {numberFormat(tip.totalPerPerson)}
          </div>
        </div>
      </div>
      <button onClick={handleResetOnClick}>Reset</button>
    </div>
  );
};

export default Output;

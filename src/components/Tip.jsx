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
          <span className="output__label">
            <div>Tip Amount</div>
            <div>/ person</div>
          </span>
          <span className="output__amount">
            {numberFormat(tip.tipPerPerson || 0)}
          </span>
        </div>
        <div className="output__total">
          <span className="output__label">
            <div>Total</div>
            <div>/ person</div>
          </span>
          <div className="output__amount">
            {numberFormat(tip.totalPerPerson || 0)}
          </div>
        </div>
      </div>
      <button onClick={handleResetOnClick}>Reset</button>
    </div>
  );
};

export default Output;

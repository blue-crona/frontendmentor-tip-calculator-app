import { useEffect, useState } from "react";
import { numberFormat } from "../helpers/currency";

const Outputs = ({ tipAmounts, handleResetOnClick }) => {
  const [isResetDisabled, setIsResetDisabled] = useState(false);

  useEffect(() => {
    resetDisabled();
  }, [tipAmounts]);

  const resetDisabled = () => {
    setIsResetDisabled(
      tipAmounts.tipPerPerson === 0 && tipAmounts.totalPerPerson === 0
    );
  };

  return (
    <div className="output">
      <div>
        <div className="output__tip-amount">
          <div>
            <h2 className="output__header">Tip Amount</h2>
            <span className="output__sub-header">/ person</span>
          </div>
          <div className="output__amount">
            {numberFormat(tipAmounts.tipPerPerson)}
          </div>
        </div>
        <div className="output__total">
          <div>
            <h2 className="output__header">Total</h2>
            <span className="output__sub-header">/ person</span>
          </div>
          <div className="output__amount">
            {numberFormat(tipAmounts.totalPerPerson)}
          </div>
        </div>
      </div>
      <button
        className="button button--strong-cyan button--uppercase"
        disabled={isResetDisabled}
        onClick={handleResetOnClick}
      >
        Reset
      </button>
    </div>
  );
};

export default Outputs;

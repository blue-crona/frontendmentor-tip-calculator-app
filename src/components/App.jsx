import { useState, useEffect } from "react";
/* components */
import Inputs from "./Inputs";
import Outputs from "./Outputs";
/* styles */
import "../css/app.css";

const defaultTipParameters = {
  bill: "",
  percentage: "",
  persons: "",
};

const defaultTipAmounts = {
  tipPerPerson: 0,
  totalPerPerson: 0,
};

function App() {
  const [tipParameters, setTipParameters] = useState(defaultTipParameters);
  const [tipAmounts, setTipAmounts] = useState(defaultTipAmounts);

  useEffect(() => {
    Calculate();
  }, [tipParameters]);

  const handleTipEdit = (inputs) => {
    setTipParameters(inputs);
  };

  const handleResetOnClick = () => {
    setTipParameters(defaultTipParameters);
  };

  function Calculate() {
    const { bill, percentage, persons } = tipParameters;
    if (bill && percentage && persons && persons >= 1) {
      const tipPerPerson = (bill * percentage) / 100 / persons;
      const totalPerPerson = tipPerPerson + bill / persons;
      setTipAmounts({ tipPerPerson, totalPerPerson });
    } else {
      setTipAmounts(defaultTipAmounts);
    }
  }

  return (
    <main className="app__container">
      <Inputs tipParameters={tipParameters} handleTipEdit={handleTipEdit} />
      <Outputs
        tipAmounts={tipAmounts}
        handleResetOnClick={handleResetOnClick}
      />
    </main>
  );
}

export default App;

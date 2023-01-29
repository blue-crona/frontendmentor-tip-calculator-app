import { useState, useEffect } from "react";
import "../css/app.css";
import Attribution from "./Attribution";
import TipEdit from "./TipEdit";
import Tip from "./Tip";
import Header from "./Header";

function App() {
  const defaultTipParams = {
    bill: 0,
    percentage: 0,
    numberOfPeople: 1,
  };

  const defaultTip = {
    tipPerPerson: 0,
    totalPerPerson: 0,
  };

  const [tipParams, setTipParams] = useState(defaultTipParams);
  const [isInvalid, setIsInvalid] = useState(false);
  const [tip, setTip] = useState(defaultTip);

  useEffect(() => {
    Calculate();
  }, [tipParams]);

  useEffect(() => {
    console.log("loading inputs from browser session...");
  }, []);

  const handleTipParamsEdit = (inputs) => {
    // update browser session
    setTipParams(inputs);
  };

  function Calculate() {
    const { bill, percentage, numberOfPeople } = tipParams;
    if (bill && percentage && numberOfPeople && numberOfPeople >= 1) {
      const tipPerPerson = (bill * percentage) / 100 / numberOfPeople;
      const totalPerPerson = tipPerPerson + bill / numberOfPeople;

      setTip({ tipPerPerson, totalPerPerson });
    } else {
      setTip(defaultTip);
    }
  }

  const validate = (value) => {
    const zeroNumberOfPeople = value < 1;
    setIsInvalid(zeroNumberOfPeople);
  };

  const handleResetOnClick = () => {
    setTipParams(defaultTipParams);
    validate();
  };

  // Issue:
  // https://stackoverflow.com/questions/42550341/react-trigger-onchange-if-input-value-is-changing-by-state

  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <TipEdit
          tipParams={tipParams}
          validate={validate}
          isInvalid={isInvalid}
          handleTipParamsEdit={handleTipParamsEdit}
        ></TipEdit>
        <Tip tip={tip} handleResetOnClick={handleResetOnClick} />
      </div>
      <Attribution />
    </div>
  );
}

export default App;

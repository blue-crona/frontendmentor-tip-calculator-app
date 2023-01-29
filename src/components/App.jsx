import { useState, useEffect } from "react";
import "../css/app.css";
import Attribution from "./Attribution";
import Input from "./Input";
import Output from "./Output";

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
    const tipPerPerson = (bill * percentage) / 100 / numberOfPeople;
    const totalPerPerson = tipPerPerson + bill / numberOfPeople;

    setTip({ tipPerPerson, totalPerPerson });
  }

  const handleResetOnClick = () => {
    setTipParams(defaultTipParams);
  };

  return (
    <div className="app">
      <h1 className="app__heading">
        <div>Spli</div>
        <div>tter</div>
      </h1>
      <div className="app__container">
        <Input
          tipParams={tipParams}
          handleTipParamsEdit={handleTipParamsEdit}
        ></Input>
        <Output tip={tip} handleResetOnClick={handleResetOnClick} />
      </div>
      <Attribution />
    </div>
  );
}

export default App;

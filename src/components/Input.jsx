const Input = ({ testProp } = props) => {
  return (
    <div className="input">
      <div>
        <h2 className="input__header">Bill</h2>
        <input className="input__bill" type="number"></input>
      </div>
      <div>
        <h2 className="input__header">Select Tip % </h2>
        <div className="input__tip-grid">
          <button className="">5%</button>
          <button className="">10%</button>
          <button className="">15%</button>
          <button className="">25%</button>
          <button className="">50%</button>
          <button className="">Custom</button>
        </div>
      </div>
      <div>
        <h2 className="input__header">Number of People</h2>
        <input className="input__people" type="number"></input>
      </div>
    </div>
  );
};

export default Input;

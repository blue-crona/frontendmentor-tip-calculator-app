const Output = () => {
  return (
    <div className="output">
      <div>
        <div className="output__tip-amount">
          <span>
            <div>Tip Amount</div>
            <div>/ person</div>
          </span>
          <span>$4.27</span>
        </div>
        <div className="output__total">
          <span>
            <div>Total</div>
            <div>/ person</div>
          </span>
          <div>$32.79</div>
        </div>
      </div>
      <button>Reset</button>
    </div>
  );
};

export default Output;

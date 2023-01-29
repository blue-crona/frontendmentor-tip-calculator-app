import { useState, useEffect } from "react";
import "../css/app.css";
import Attribution from "./Attribution";
import Input from "./Input";
import Output from "./Output";

function App() {
  return (
    <div className="app">
      <h1 className="app__heading">
        <div className="app__heading--top">Spli</div>
        <div className="app__heading--bottom">tter</div>
      </h1>
      <div className="app__container">
        <Input testProp={"tests 99"}></Input>
        <Output />
      </div>
      <Attribution />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Attribution from "./components/Attribution";
import Header from "./components/Header";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="body">
      <Header />
      <App />
      <Attribution />
    </div>
  </React.StrictMode>
);

import React from "react";
import Calculator from "./component/Calculator";
import Images from "./component/Images";
import "./style/Style.css";

const App = () => {
  return (
    <div className="block">
      <Images />
      <Calculator />
    </div>
  );
};

export default App;

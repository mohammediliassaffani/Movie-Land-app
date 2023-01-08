import React from "react";
import "./App.css";

const Persen = (props) => {
  return (
    <div className="Persen">
      <h1>{props.Name}</h1>
      <h2>{props.lastName}</h2>
      <h3>{props.age}</h3>
    </div>
  );
};
const App = () => {
  return (
    <div className="App">
      <Persen name="iliass" lastName="affani" age="30" />
    </div>
  );
};

export default App;

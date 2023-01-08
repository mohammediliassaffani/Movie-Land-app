import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [conter, setCounter] = useState(0);

  useEffect(() => {
    return () => {
      // setCounter(0);
    };
  }, []);
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
      <h2>{conter}</h2>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
    </div>
  );
};

export default App;

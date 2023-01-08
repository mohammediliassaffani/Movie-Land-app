import "./App.css";

const App = () => {
  const name = "iliass";
  const isName = false;
  return (
    <div className="App">
      <h1>hello </h1>
      {isName ? name : "spmeone"}
    </div>
  );
};

export default App;

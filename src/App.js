import { useEffect } from "react";
import "./App.css";
import serachIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=3fa61792";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("superman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="search for movie"
          value={"iliass"}
          onChange={() => {}}
        />
        <img src={serachIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container"></div>
    </div>
  );
};

export default App;

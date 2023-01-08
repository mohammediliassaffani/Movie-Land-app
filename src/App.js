import { useEffect } from "react";
import "./App.css";
import serachIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=3fa61792";

const movie1 = {
  Title: "Superman/Batman: Apocalypse",
  Year: "2010",
  imdbID: "tt1673430",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
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
      <div className="container">
        <div className="movie">
          <div>
            <h1>{movie1.Title}</h1>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

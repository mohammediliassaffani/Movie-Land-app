import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import serachIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=dd8099a1";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchMovies);
  }, []);

  return (
    <div className="app">
      <h1>movieland</h1>
      <div className="search">
        <input
          placeholder="search now"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={serachIcon}
          alt="search here"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>no film</h3>
        </div>
      )}
    </div>
  );
};
export default App;

// import { useEffect, useState } from "react";
// import MovieCard from "./MovieCard";
// import "./App.css";
// import serachIcon from "./search.svg";

// const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=dd8099a1";

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();
//     setMovies(data.Search);
//   };
//   useEffect(() => {
//     searchMovies(searchMovies);
//   }, []);
//   return (
//     <div className="app">
//       <h1>MovieLand</h1>
//       <div className="search">
//         <input
//           placeholder="search for movie"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <img
//           src={serachIcon}
//           alt="search"
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>

//       {movies.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <MovieCard movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

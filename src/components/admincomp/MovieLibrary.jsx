import React from "react";
import "./MovieLibrary.css"; // MovieLibrary styles

function MovieLibrary() {
  // Placeholder data for movies
  const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
    { id: 2, title: "Interstellar", genre: "Adventure", year: 2014 },
    { id: 3, title: "The Matrix", genre: "Action", year: 1999 },
  ];

  return (
    <div className="movie-library">
      <h1>Movie Library</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieLibrary;

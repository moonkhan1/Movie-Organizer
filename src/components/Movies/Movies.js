import React, { Component, useState } from 'react';
// import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

// class Movies extends Component {
//     state = { 
//         movies: [
//             {
//                 imdbID: 'tt3896198',
//                 title: "Guardians of the Galaxy Vol. 2",
//                 year: 2017,
//                 poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

//             },
//             {
//                 imdbID: 'tt0068646',
//                 title: "The Godfather",
//                 year: 1972,
//                 poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

//             }
//         ]
//     }
//     render() { 
//         return ( 
//             <ul className="movies">
//                 {this.state.movies.map((movie) => (
//                     <li className="movies__item" key={movie.imdbID}>
//                         <MovieItem {...movie} />
//                     </li>
//                 ))}
//             </ul>
//         );
//     }
// }
 
// export default Movies;

// import './App.css';
// const DEFAULT_PLACEHOLDER_IMAGE =
  // "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movies = ({ movie, props , addToFav}) => {
    const poster =
    movie.Poster 

    return (
    <div onClick={()=>addToFav(movie)}className="movies_item">
      <h2 className="movie-item__title">{movie.Title}</h2>
      <h4>{movie.Year}</h4>

      <div>
        <img
        className='movie-item__poster'
          width="200"
          height="400"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
        
      </div>
      <p className="movie-item__title">
      </p>
    </div>


  );
};

export default Movies;

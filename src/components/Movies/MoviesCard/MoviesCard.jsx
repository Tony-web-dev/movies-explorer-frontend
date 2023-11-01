import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MoviesCard.css";

export default function MoviesCard({ toggleSaveMovie, onDelete, movie, savedMovies }) {
  const location = useLocation();
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (location.pathname === "/movies") {
      setClick(savedMovies.some(item => movie.id === item.movieId))
    }
  }, [savedMovies, movie.id, setClick, location.pathname])

  function onClick() {
    if (savedMovies.some(item => movie.id === item.movieId)) {
      setClick(true)
      toggleSaveMovie(movie)
    } else {
      setClick(false)
      toggleSaveMovie(movie)
    }
  }

  function convertingDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration % 60);
    return `${hours > 0 ? hours + '\xa0час ' : ''}${minutes}\xa0минут`;
  }

  return (
    <li className="movie">
      <Link to={movie.trailerLink} className="movie__link-trailer link-hover" target="_blank">
        <img src={location.pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt={`Постер фильма ${movie.name}`} className="movie__poster" />
      </Link>
      <div className="movie__description">
        <div className="movie__info">
          <h2 className="movie__title">{movie.nameRU}</h2>
          {location.pathname === "/movies" ?
            <button type="button" className={`movie__like ${click ? "movie__like_type_active" : ""} button-hover`} onClick={onClick}></button>
            :
            <button type="button" className={`movie__like movie__like_type_delete button-hover`} onClick={() => onDelete(movie._id)}></button>
          }
        </div>
        <span className="movie__duration">{convertingDuration(movie.duration)}</span>
      </div>
    </li>
  )
};
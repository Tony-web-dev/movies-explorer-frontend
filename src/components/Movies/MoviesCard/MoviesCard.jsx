import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./MoviesCard.css";

export default function MoviesCard({ name, src, trailerLink, duration}) {
  const location = useLocation();
  const [click, setClick] = useState(false);

  function onClick() {
    if (click) {
      setClick(false)
    } else {
      setClick(true)
    }
  }

  return (
    <li className="movie">
      <Link to={trailerLink} className="movie__link-trailer link-hover" target="_blank">
        <img src={src} alt="Постер фильма" className="movie__poster" />
      </Link>
      <div className="movie__description">
        <div className="movie__info">
          <h2 className="movie__title">{name}</h2>
          {location.pathname === "/movies" ?
            <button type="button" className={`movie__like ${click ? "movie__like_type_active" : ""} button-hover`} onClick={onClick}></button>
            :
            <button type="button" className={`movie__like movie__like_type_delete button-hover`}></button>
          }
        </div>
        <span className="movie__duration">{duration}</span>
      </div>
    </li>
  )
};
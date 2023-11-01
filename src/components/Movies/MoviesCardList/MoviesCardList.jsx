import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import { useEffect, useState } from "react";
import Preloader from "../../Preloader/Preloader.jsx";
import { useLocation } from "react-router-dom";
import { DESKTOP_LAPTOP_RESOLUTION, DESKTOP_MAX_RESOLUTION, INIT_MAX_DESKTOP, INIT_LAPTOP_DESKTOP, INIT_MOBILE, INIT_TABLET, STEP_DESKTOP, STEP_MOBILE, STEP_TABLET, TABLET_RESOLUTION } from "../../../utils/constants";
import { RESULT_NOTHING, RESULT_NO_QUERY, RESULT_NO_SAVED, RESULT_SERVER_ERROR } from "../../../utils/responses";


export default function MoviesCardList({
  filteredMovies,
  toggleSaveMovie,
  onDelete,
  savedMovies,
  serverError,
  primaryEntrance,
  isLoading
}) {
  const location = useLocation();
  const [additionalCount, setAdditionalCount] = useState("");
  const moviesToRender = filteredMovies.slice(0, additionalCount);

  function loadCards() {
    const additionalCounter = { init: INIT_MAX_DESKTOP, step: STEP_DESKTOP }
    if (window.innerWidth < DESKTOP_MAX_RESOLUTION) {
      additionalCounter.init = INIT_LAPTOP_DESKTOP
      additionalCounter.step = STEP_TABLET
    }
    if (window.innerWidth < DESKTOP_LAPTOP_RESOLUTION) {
      additionalCounter.init = INIT_TABLET
      additionalCounter.step = STEP_MOBILE
    }
    if (window.innerWidth < TABLET_RESOLUTION) {
      additionalCounter.init = INIT_MOBILE
      additionalCounter.step = STEP_MOBILE
    }
    return additionalCounter;
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      setAdditionalCount(loadCards().init)
      function loadCardsForResize() {
        if (window.innerWidth >= DESKTOP_MAX_RESOLUTION) {
          setAdditionalCount(loadCards().init)
        }
        if (window.innerWidth < DESKTOP_MAX_RESOLUTION) {
          setAdditionalCount(loadCards().init)
        }
        if (window.innerWidth < DESKTOP_LAPTOP_RESOLUTION) {
          setAdditionalCount(loadCards().init)
        }
        if (window.innerWidth < TABLET_RESOLUTION) {
          setAdditionalCount(loadCards().init)
        }
      }
      window.addEventListener("resize", loadCardsForResize)
      return () => window.removeEventListener("resize", loadCardsForResize)
    }
  }, [location.pathname, filteredMovies])

  function clickBtnMore() {
    setAdditionalCount(additionalCount + loadCards().step)
  }

  return (
    <section className="movies">
      <ul className="movies__list">
        {isLoading ? <Preloader /> :
          (location.pathname === "/movies" && moviesToRender.length !== 0) ?
          moviesToRender.map((movie) => {
              return (
                <MoviesCard
                  key={movie.id}
                  savedMovies={savedMovies}
                  toggleSaveMovie={toggleSaveMovie}
                  movie={movie}
                  />
              )
            })
            :
            filteredMovies.length !== 0 ?
            filteredMovies.map((movie) => {
              return (
                <MoviesCard
                  key={movie._id}
                  onDelete={onDelete}
                  movie={movie}
                  />
              )
            })
            :
            serverError ?
              <span className="movies__search-error">{RESULT_SERVER_ERROR}</span>
              :
              !primaryEntrance ?
                <span className="movies__search-error">{RESULT_NOTHING}</span>
                :
                location.pathname === '/movies' ?
                  <span className="movies__search-error">{RESULT_NO_QUERY}</span>
                  :
                  <span className="movies__search-error">{RESULT_NO_SAVED}</span>


        }

      </ul>
      {location.pathname === "/movies" &&
      <button
        className={`movies__btn-more ${additionalCount >= filteredMovies.length && "movies__btn-more_hidden"} button-hover`}
        type="button"
        onClick={clickBtnMore}>
          Ещё
        </button>
      }
    </section>
  )
};
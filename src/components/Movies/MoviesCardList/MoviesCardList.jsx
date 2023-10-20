import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import { useState } from "react";

export default function MoviesCardList({ movies }) {
  const [visibleCount, setVisibleCount] = useState(loadCards().init);
  const moviesCollection = movies.slice(0, visibleCount);

  function loadCards() {
    const visibleCounter = { init: 16, step: 4 }
    if (window.innerWidth < 1023) {
      visibleCounter.init = 8
      visibleCounter.step = 2
    }
    if (window.innerWidth < 767) {
      visibleCounter.init = 5
      visibleCounter.step = 2
    }
    return visibleCounter;
  }

  function clickBtnMore() {
    setVisibleCount(visibleCount + loadCards().step)
  }

  return (
    <section className="movies">
      <ul className="movies__list">
        {moviesCollection.map(moviesData => {
          return (
            <MoviesCard
              key={moviesData.id}
              name={moviesData.name}
              src={moviesData.image}
              trailerLink={moviesData.trailerLink}
              duration={moviesData.duration}
            />
          )
        })}
      </ul>
      <button
        className={`movies__btn-more ${visibleCount >= movies.length && "movies__btn-more_hidden"} button-hover`}
        type="button"
        onClick={clickBtnMore}>
          Ещё
        </button>
    </section>
  )
};
// import { savedMovies } from "../../utils/temporaryBase";
import { useCallback, useEffect, useState } from "react";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../Movies/SearchForm/SearchForm.jsx";
import { SHORT_MOVIE_DURATION } from "../../utils/constants.js";


export default function SavedMovies({  savedMovies, onDelete }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [savedSearch, setSavedSearch] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [primaryEntrance, setPrimaryEntrance] = useState(true);

  const filterMovies = useCallback((search, shortMovieFilter, movies) => {
    setSavedSearch(search);
    setFilteredMovies(movies.filter((movie) => {
      const searchQuery = (movie.nameRU.toLowerCase().includes(search.toLowerCase())) || (movie.nameEN.toLowerCase().includes(search.toLowerCase()));
      return shortMovieFilter ? (searchQuery && movie.duration <= SHORT_MOVIE_DURATION) : searchQuery
    }))
  }, [])

  function searchMovies(search) {
    setPrimaryEntrance(false);
    setSavedSearch(search);
    filterMovies(search, isChecked, savedMovies)
  }

  useEffect(() => {
    if (savedMovies.length === 0) {
      setPrimaryEntrance(true)
    } else {
      setPrimaryEntrance(false)
    }
    filterMovies(savedSearch, isChecked, savedMovies)
  }, [filterMovies, savedMovies, isChecked, savedSearch])



  return (
    <>
      <Header />
      <main className="main">
        <SearchForm
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          searchMovies={searchMovies}
          savedSearch={savedSearch}
          savedMovies={savedMovies}
          allMovies={savedMovies}
          primaryEntrance={primaryEntrance} />
        <MoviesCardList
          filteredMovies={filteredMovies}
          onDelete={onDelete}
          primaryEntrance={primaryEntrance}
          />
      </main>
      <Footer />
    </>
  )
};
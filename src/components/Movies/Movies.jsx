import { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import SearchForm from "./SearchForm/SearchForm.jsx";
import MoviesCardList from "./MoviesCardList/MoviesCardList.jsx";
import { movieApi } from "../../utils/MovieApi.js";
import { SHORT_MOVIE_DURATION } from "../../utils/constants.js";

export default function Movies({ toggleSaveMovie, savedMovies }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedSearch, setSavedSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [serverError, setServerError] = useState(false);
  const [primaryEntrance, setPrimaryEntrance] = useState(true);

  const filterMovies = useCallback((search, shortMovieFilter, movies) => {
    setSavedSearch(search);
    setFilteredMovies(movies.filter((movie) => {
      const searchQuery = (movie.nameRU.toLowerCase().includes(search.toLowerCase())) || (movie.nameEN.toLowerCase().includes(search.toLowerCase()));
      return shortMovieFilter ? (searchQuery && movie.duration <= SHORT_MOVIE_DURATION) : searchQuery;
    }))
    localStorage.setItem("searchResult", JSON.stringify(search));
    localStorage.setItem("shorts", JSON.stringify(shortMovieFilter));
    localStorage.setItem("allmovies", JSON.stringify(movies));
  }, [])

  function searchMovies(search) {
    if (allMovies.length === 0) {
      setIsLoading(true);
      movieApi.getAllMovies()
        .then((res) => {
          setAllMovies(res);
          setIsChecked(false);
          setServerError(false);
          setPrimaryEntrance(false);
          filterMovies(search, isChecked, res)
        })
        .catch((error) => {
          setServerError(true);
          console.error("Ошибка поиска фильма:", error);
        })
        .finally(() => setIsLoading(false));
    } else {
      filterMovies(search, isChecked, allMovies)
    }
  }

  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.searchResult) {
      const movies = JSON.parse(localStorage.allmovies) || [];
      const shortMovieFilter = JSON.parse(localStorage.shorts) || false;
      const search = JSON.parse(localStorage.searchResult) || "";
      setServerError(false);
      setPrimaryEntrance(false);
      setAllMovies(movies);
      setIsChecked(shortMovieFilter);
      setSavedSearch(search);
      filterMovies(search, shortMovieFilter, movies);
    }
  }, [filterMovies])

  return (
    <>
    <Header />
    <main className="main">
      <SearchForm
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        searchMovies={searchMovies}
        savedSearch={savedSearch}
        filterMovies={filterMovies}
        primaryEntrance={primaryEntrance}
        allMovies={allMovies} />
      <MoviesCardList
        filteredMovies={filteredMovies}
        toggleSaveMovie={toggleSaveMovie}
        savedMovies={savedMovies}
        serverError={serverError}
        primaryEntrance={primaryEntrance}
        isLoading={isLoading} />
    </main>
    <Footer />
  </>
  )
};
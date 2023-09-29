import { savedMovies } from "../../utils/temporaryBase";
import Footer from "../Footer/Footer";
import HeaderForLogged from "../HeaderForLogged/HeaderForLogged";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";


export default function SavedMovies() {
  return (
    <>
      <HeaderForLogged />
      <main className="main">
        <SearchForm />
        <MoviesCardList movies={savedMovies} />
      </main>
      <Footer />
    </>
  )
};
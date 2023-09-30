import { savedMovies } from "../../utils/temporaryBase";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../Movies/SearchForm/SearchForm.jsx";


export default function SavedMovies() {
  return (
    <>
      <Header />
      <main className="main">
        <SearchForm />
        <MoviesCardList movies={savedMovies} />
      </main>
      <Footer />
    </>
  )
};
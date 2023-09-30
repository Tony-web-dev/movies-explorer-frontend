import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import SearchForm from "./SearchForm/SearchForm.jsx";
import MoviesCardList from "./MoviesCardList/MoviesCardList.jsx";
import { movies } from "../../utils/temporaryBase.js";


export default function Movies() {
  return (
    <>
    <Header />
    <main className="main">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
    <Footer />
  </>
  )
};
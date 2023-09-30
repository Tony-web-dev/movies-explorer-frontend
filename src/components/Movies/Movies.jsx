import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import SearchForm from "./SearchForm/SearchForm.jsx";
import MoviesCardList from "./MoviesCardList/MoviesCardList.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import { movies } from "../../utils/temporaryBase.js";

export default function Movies() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  return (
    <>
    <Header />
    <main className="main">
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList movies={movies} />}
    </main>
    <Footer />
  </>
  )
};
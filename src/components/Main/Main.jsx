import Header from "../Header/Header.jsx";
import Promo from "./Promo/Promo.jsx";
import AboutProject from "./AboutProject/AboutProject.jsx";
import Techs from "./Techs/Techs.jsx";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <>
    <Header />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}
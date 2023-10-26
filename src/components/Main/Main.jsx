import Header from "../Header/Header.jsx";
import Promo from "./Promo/Promo.jsx";
import AboutProject from "./AboutProject/AboutProject.jsx";
import Techs from "./Techs/Techs.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Main({ isLoggedIn }) {
  return (
    <>
    <Header isLoggedIn={isLoggedIn} />
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
};
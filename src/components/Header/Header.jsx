import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";


export default function Header() {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const [isBurgermenuOpen, setIsBurgermenuOpen] = useState(false);


  function toggleBurger() {
    if (isBurgermenuOpen) {
      setIsBurgermenuOpen(false)
    } else {
      setIsBurgermenuOpen(true)
    }
  }

  useEffect(() => {
    function closeBurger() {
      if (document.documentElement.clientWidth > "800") {
        setIsBurgermenuOpen(false)
        window.removeEventListener("resize", closeBurger)
      }
    }

    if(isBurgermenuOpen) {
      window.addEventListener("resize", closeBurger)
      return () => window.removeEventListener("resize", closeBurger)
    }
  }, [isBurgermenuOpen])

  return (
    <header className={`header ${location.pathname === "/" ? "header_page_landing" : ""}`}>
      <div className="header__container">
        <Logo setIsLogged={setIsLogged}/> {/* временная авторизация */}

          {location.pathname === "/" && !isLogged ?
            <nav className="header__nav">
              <ul className="header__nav-list header__nav-list_page_landing">
                <li className="header__nav-item">
                  <Link to="/signup" className="header__nav-link header__nav-link_signup link-hover">
                    Регистрация
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to="/signin" className="header__nav-link header__nav-link header__nav-link_signin link-hover">
                    Войти
                  </Link>
                </li>
              </ul>
            </nav>
          :
          <>
            <Navigation isBurgermenuOpen={isBurgermenuOpen} closeBurger={toggleBurger} />
            <button type="button" className={`header__btn-burger ${location.pathname === "/" ? "header__btn-burger_page_landing" : ""} button-hover`} onClick={toggleBurger}></button>
          </>

        }
      </div>
    </header>
  )
};
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo.jsx";


export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="https://www.artlebedev.ru/typograf/" className="header__nav-link header__nav-link_signup link-hover">
                Регистрация
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="https://www.artlebedev.ru/typograf/" className="header__nav-link link-hover">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
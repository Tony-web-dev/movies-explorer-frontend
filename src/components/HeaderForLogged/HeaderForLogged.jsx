import { Link } from "react-router-dom";
import "./HeaderForLogged.css";
import Logo from "../Logo/Logo.jsx";


export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <nav className="header__nav">
        <ul class="header__nav-list header__nav-list_movies">
            <li class="header__nav-item">
              <Link to="#" class="header__nav-link header__nav-link_movies">Фильмы</Link>
            </li>
            <li class="header__nav-item">
              <Link to="#" class="header__nav-link header__nav-link_movies">Сохранённые фильмы</Link>
            </li>
          </ul>
        </nav>
        <Link to="#" class="header__account-link link-hover">
          <span class="header__account-span">Аккаунт</span>
          <div class="header__account-logo" />
        </Link>
      </div>
    </header>
  )
};
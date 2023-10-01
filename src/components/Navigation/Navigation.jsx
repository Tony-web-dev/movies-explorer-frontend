import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ isBurgermenuOpen, closeBurger }) {
  const location = useLocation();

  return (
    <nav className={`navigation ${isBurgermenuOpen ? "navigation_popup" : ""}`}>
      <button type="button" className="navigation__btn-close button-hover" onClick={closeBurger}></button>
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <Link to="/" className={`navigation__link ${location.pathname === "/" ? "navigation__link_active" : ""} link-hover`} onClick={closeBurger}>Главная</Link>
        </li>
        <li className="navigation__list-item">
          <Link to="/movies" className={`navigation__link ${location.pathname === "/movies" ? "navigation__link_active" : ""} ${location.pathname === "/" ? "navigation__link_page_landing" : ""} link-hover`} onClick={closeBurger}>Фильмы</Link>
        </li>
        <li className="navigation__list-item">
          <Link to="/saved-movies" className={`navigation__link ${location.pathname === "/saved-movies" ? "navigation__link_active" : ""} ${location.pathname === "/" ? "navigation__link_page_landing" : ""} link-hover`} onClick={closeBurger}>Сохранённые фильмы</Link>
        </li>
      </ul>
      <Link to="/profile" className={`navigation__link-account ${location.pathname === "/" ? "navigation__link-account_page_landing" : ""} link-hover`} onClick={closeBurger}>
        <span className="navigation__account-span">Аккаунт</span>
        <div className="navigation__account-logo" />
      </Link>
    </nav>
  )
};
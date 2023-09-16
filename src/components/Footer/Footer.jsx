import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__columns">
        <div className="footer__column">
          <p className="footer__author">© 2023 Антонина Тимуш</p>
        </div>
        <div className="footer__column">
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <Link to="https://practicum.yandex.ru/" className="footer__nav-link link-hover" target="_blank">
                  Яндекс.Практикум
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link to="https://github.com/" className="footer__nav-link link-hover" target="_blank">
                  Github
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
};
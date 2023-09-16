import { Link } from "react-router-dom";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <article className="portfolio">
      <h3 className="portfolio__subtitle">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <p className="portfolio__item-text">Статичный сайт</p>
          <Link to="https://github.com/Tony-web-dev/how-to-learn" target="_blank" className="portfolio__link link-hover">
            ↗
          </Link>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__item-text">Адаптивный сайт</p>
          <Link to="https://github.com/Tony-web-dev/russian-travel" target="_blank" className="portfolio__link link-hover">
            ↗
          </Link>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__item-text">Одностраничное приложение</p>
          <Link to="https://github.com/Tony-web-dev/react-mesto-api-full-gha" target="_blank" className="portfolio__link link-hover">
            ↗
          </Link>
        </li>
      </ul>
    </article>
  )
};
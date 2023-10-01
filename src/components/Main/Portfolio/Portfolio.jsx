import { Link } from "react-router-dom";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="section portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link to="https://github.com/Tony-web-dev/how-to-learn" target="_blank" className="portfolio__link link-hover">
            <p className="portfolio__item-text">Статичный сайт</p>
            <span className="portfolio__item-arrow">↗</span>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link to="https://github.com/Tony-web-dev/russian-travel" target="_blank" className="portfolio__link link-hover">
            <p className="portfolio__item-text">Адаптивный сайт</p>
            <span className="portfolio__item-arrow">↗</span>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link to="https://github.com/Tony-web-dev/react-mesto-api-full-gha" target="_blank" className="portfolio__link link-hover">
            <p className="portfolio__item-text">Одностраничное приложение</p>
            <span className="portfolio__item-arrow">↗</span>
          </Link>
        </li>
      </ul>
    </section>
  )
};
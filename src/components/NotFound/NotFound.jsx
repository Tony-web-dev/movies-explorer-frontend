import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate;

  return (
    <main className="main">
      <section className="section not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <Link className="not-found__link link-hover" onClick={() => navigate(-1)}>Назад</Link>
      </section>
    </main>
  )
};
import "./Promo.css";
import promoImg from "../../../images/promo_img.svg";
import { Link } from "react-router-dom";

export default function Promo() {
  return (
    <section className="section promo">
      <div className="promo__text-container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки
        </h1>
        <p className="promo__paragraph">
          Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.
        </p>
        <Link to="/#project" className="promo__anchor-link link-hover">Узнать больше</Link>
      </div>
      <img
        src={promoImg}
        alt="Графические линии"
        className="promo__img"
      />

    </section>
  );
};

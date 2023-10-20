import "./Profile.css";
import Header from "../Header/Header.jsx";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation.js";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Profile({ isLoggedIn, logOut}) {
  const { values, handleChange, errors, isValid } = useFormValidation();
  const { name, email } = useContext(CurrentUserContext);

  return (
    <>
      <Header />
      <main className="main">
        <section className="section profile">
          <h1 className="profile__title">{`Привет, ${name}`}</h1>
          <form
            className="profile__form"
            name="profile-name">
            <fieldset className="profile__form-fieldset">
              <label className="profile__label">
                <span className="profile__subtitle">Имя</span>
                <input
                  type="text"
                  className="profile__input input-focus"
                  name="name"
                  placeholder="Ваше имя"
                  defaultValue={name || ""}
                  onChange={handleChange}
                  minLength="2"
                  maxLength="30"
                  required />
              </label>

              <span className="profile__input-error">{errors.name}</span>

              <label className="profile__label">
                <span className="profile__subtitle">E-mail</span>
                <input
                  type="text"
                  className="profile__input input-focus"
                  name="email"
                  placeholder="Ваш e-mail"
                  defaultValue={email || ""}
                  onChange={handleChange}
                  minLength="2"
                  maxLength="30"
                  required />
              </label>

              <span className="profile__input-error">{errors.email}</span>
            </fieldset>

            <span className="profile__submit-error">текст ошибки</span>
            <div className="profile__buttons-container">
              <button type="submit" className={`btn-submit ${!isValid && "btn-submit_disabled"} button-hover`}>Сохранить</button>
              <button type="button" className="profile__button button-hover">Редактировать</button>
              <button type="button" className="profile__button button-hover" onClick={logOut}>
                <Link to="/" className="profile__link-logout">Выйти из аккаунта</Link>
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
};
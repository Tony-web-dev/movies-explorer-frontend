import "./Profile.css";
import Header from "../Header/Header.jsx";
import { Link } from "react-router-dom";

export default function Profile() {

  return (
    <>
      <Header />
      <main className="main">
        <section className="section profile">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form
            className="profile__form"
            name="profile-name">
            <label className="profile__label">
              <span className="profile__subtitle">Имя</span>
              <input
                type="text"
                className="profile__input input-focus"
                name="name"
                placeholder="Виталий"
                minLength="2"
                maxLength="30"
                required />
            </label>

            <span className="profile__error">текст ошибки</span>

            <label className="profile__label">
              <span className="profile__subtitle">E-mail</span>
              <input
                type="text"
                className="profile__input input-focus"
                name="email"
                placeholder="pochta@mail.ru"
                minLength="2"
                maxLength="30"
                required />
            </label>

            <span className="profile__error">текст ошибки</span>

            <span className="profile__sbm-error">текст ошибки</span>
            <div className="profile__buttons-container">
              {/* пока нет валидации, кнопку закомментила */}
              {/* <button type="submit" className="btn-submit button-hover">Сохранить</button> */}
              <button type="button" className="profile__button button-hover">Редактировать</button>
              <button type="button" className="profile__button button-hover">
                <Link to="/" className="profile__link-logout">Выйти из аккаунта</Link>
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
};
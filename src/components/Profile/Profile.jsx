import "./Profile.css";
import HeaderForLogged from "../HeaderForLogged/HeaderForLogged";

export default function Profile() {
  return (
    <>
      <HeaderForLogged />
      <main className="main">
        <section className="section profile">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form
            className="profile__form"
            name="profile-name"
            noValidate>
            <label className="profile__label">
              <span className="profile__subtitle">Имя</span>
              <input
                type="text"
                className="profile__input input-focus"
                name="name"
                minLength="2"
                maxLength="30"
                placeholder="Виталий"
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
                required />
            </label>

            <span className="profile__error">текст ошибки</span>

            <span className="profile__sbm-error">текст ошибки</span>
            <div className="profile__buttons-container">
              {/* <button type="submit" className="btn-submit button-hover" disabled>Сохранить</button> */}
              <button type="button" className="profile__btn-edit button-hover">Редактировать</button>
              <button type="button" className="profile__btn-logout button-hover">Выйти из аккаунта</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
};
import "./Profile.css";
import Header from "../Header/Header.jsx";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation.js";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { EMAIL_REGEX, NAME_REGEX } from "../../utils/constants";

export default function Profile({ onEdit, isEdit, setIsEdit, onLogout, isError, setIsError, isSending, errorMessage }) {
  const { values, handleChange, errors, isValid, resetForm, isInputValid } = useFormValidation();
  const currentUser = useContext(CurrentUserContext);


  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email });
  }, [resetForm, currentUser, isEdit]);

  useEffect(() => {
    setIsError(false);
  }, [setIsError, values]);

  useEffect(() => {
    setIsEdit(false);
  }, [setIsEdit]);

  function handleSubmit(e) {
    e.preventDefault();
    onEdit(values.name, values.email);
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="section profile">
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
          <form
            className="profile__form"
            name="profile-name"
            onSubmit={handleSubmit}
            >
            <fieldset className="profile__form-fieldset">
              <label className="profile__label">
                <span className="profile__subtitle">Имя</span>
                <input
                  type="text"
                  className="profile__input input-focus"
                  name="name"
                  placeholder="Ваше имя"
                  defaultValue={currentUser.name || ""}
                  value={values.name}
                  isInputValid={isInputValid.name}
                  onChange={handleChange}
                  pattern={NAME_REGEX}
                  minLength="2"
                  maxLength="30"
                  disabled={isSending || !isEdit}
                  required />
              </label>

              <span className="profile__input-error">{errors.name}</span>

              <label className="profile__label">
                <span className="profile__subtitle">E-mail</span>
                <input
                  type="email"
                  className="profile__input input-focus"
                  name="email"
                  placeholder="Ваш e-mail"
                  defaultValue={currentUser.email || ""}
                  value={values.email}
                  isInputValid={isInputValid.email}
                  onChange={handleChange}
                  pattern={EMAIL_REGEX}
                  minLength="2"
                  maxLength="30"
                  disabled={isSending || !isEdit}
                  required />
              </label>

              <span className="profile__input-error">{errors.email}</span>
            </fieldset>

            <span className="profile__submit-error">{errorMessage}</span>
            <div className="profile__buttons-container">
            {!isEdit ?
              <>
                <button
                  type="button"
                  className={`profile__button button-hover`}
                  onClick={() => {
                    setIsEdit(true);
                  }}>
                Редактировать
                </button>
                <button
                  type="button"
                  className="profile__button button-hover"
                  onClick={onLogout}>
                  <Link to="/" className="profile__link-logout">Выйти из аккаунта</Link>
                </button>
              </>
              :
                <button
                  type="submit"
                  className={`btn-submit ${(values.name === currentUser.name && values.email === currentUser.email) || !isValid || isError ? "btn-submit_disactive" : ""} button-hover`}
                  disabled={!isValid || isSending || isError}>
                Сохранить
                </button>
            }
            </div>
          </form>
        </section>
      </main>
    </>
  )
};
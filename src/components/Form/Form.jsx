import { Link } from "react-router-dom";
import "./Form.css";
import FormField from "./FormField/FormField.jsx";

export default function Form({ name }) {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        {{
          register:
            <FormField
              subtitle="Имя"
              type="text"
              name="name"
            />,
          login: null
        }[name]}

        <FormField
          subtitle="E-mail"
          type="email"
          name="email"
        />

        <FormField
          subtitle="Пароль"
          type="password"
          name="password"
        />
      </fieldset>

      <div className="form__submit-container">
        <span className="form__submit-error">текст ошибки</span>
        {{
          register: <button type="submit" className={`btn-submit button-hover`}>Зарегистрироваться</button>,
          login: <button type="submit" className={`btn-submit button-hover`}>Войти</button>
        }[name]}

        <p className="form__submit-question">
          {{
            register:
              <>
                Уже зарегистрированы?
                <Link to="/signin" className="form__submit-link link-hover">Войти</Link>
              </>,
            login:
              <>
                Ещё не зарегистрированы?
                <Link to="/signup" className="form__submit-link link-hover">Регистрация</Link>
              </>
          }[name]}
        </p>
      </div>
    </form>
  )
};
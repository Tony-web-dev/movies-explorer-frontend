import { Link } from "react-router-dom";
import "./Form.css";
import FormField from "./FormField/FormField.jsx";

export default function Form({ name, onSubmit, errorMessage, values, handleChange, errors, isValid }) {

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        {{
          register:
            <FormField
              subtitle="Имя"
              type="text"
              name="name"
              values={values}
              handleChange={handleChange}
              errors={errors}
            />,
          login: null
        }[name]}

        <FormField
          subtitle="E-mail"
          type="email"
          name="email"
          values={values}
          handleChange={handleChange}
          errors={errors}
        />

        <FormField
          subtitle="Пароль"
          type="password"
          name="password"
          values={values}
          handleChange={handleChange}
          errors={errors}
        />
      </fieldset>

      <div className="form__submit-container">
        <span className="form__submit-error">{errorMessage}</span>
        {{
          register: <button type="submit" className={`btn-submit ${!isValid && "btn-submit_disabled"} button-hover`} >Зарегистрироваться</button>,
          login: <button type="submit" className={`btn-submit ${!isValid && "btn-submit_disabled"} button-hover`} >Войти</button>
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
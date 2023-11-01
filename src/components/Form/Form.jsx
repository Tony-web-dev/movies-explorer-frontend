import { Link } from "react-router-dom";
import "./Form.css";
import FormField from "./FormField/FormField.jsx";
import useFormValidation from "../../utils/useFormValidation";
import { EMAIL_REGEX, NAME_REGEX } from "../../utils/constants";

export default function Form({ name, onSubmit, errorMessage, isSending }) {
  const { values, errors, isValid, handleChange, isInputValid } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
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
              isSending={isSending}
              isInputValid={isInputValid}
              pattern={NAME_REGEX}
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
          isSending={isSending}
          isInputValid={isInputValid}
          pattern={EMAIL_REGEX}
        />

        <FormField
          subtitle="Пароль"
          type="password"
          name="password"
          values={values}
          handleChange={handleChange}
          errors={errors}
          isSending={isSending}
          isInputValid={isInputValid}
        />
      </fieldset>

      <div className="form__submit-container">
        <span className="form__submit-error">{errorMessage}</span>
        {{
          register: <button type="submit" className={`btn-submit ${!isValid && "btn-submit_disactive"} button-hover`} disabled={!isValid || isSending}>Зарегистрироваться</button>,
          login: <button type="submit" className={`btn-submit ${!isValid && "btn-submit_disactive"} button-hover`} disabled={!isValid || isSending}>Войти</button>
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
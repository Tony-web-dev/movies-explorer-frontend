import "./FormField.css";

export default function FormField({ subtitle, type, name, errors, handleChange, values, isSending, isInputValid, pattern }) {
  return (
    <label className="form__label">
      <span className="form__subtitle">{subtitle}</span>
      <input
        type={type}
        className="form__input input-focus"
        name={name}
        onChange={handleChange}
        value={values[name]}
        minLength="2"
        maxLength="30"
        placeholder=""
        disabled={isSending}
        isInputValid={isInputValid[name]}
        pattern={pattern}
        required />
      <span className="form__input-error">{errors[name]}</span>
    </label>
  )
};
import "./FormField.css";

export default function FormField({ subtitle, type, name }) {
  return (
    <label className="form__label">
      <span className="form__subtitle">{subtitle}</span>
      <input
        type={type}
        className="form__input input-focus"
        name={name}
        placeholder=""
        required />
      <span className="form__input-error">текст ошибки</span>
    </label>
  )
};
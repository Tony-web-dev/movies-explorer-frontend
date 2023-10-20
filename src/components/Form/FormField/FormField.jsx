import "./FormField.css";

export default function FormField({ subtitle, type, name, errors, handleChange, values }) {
  return (
    <label className="form__label">
      <span className="form__subtitle">{subtitle}</span>
      <input
        type={type}
        className="form__input input-focus"
        name={name}
        value={values[name] || ""}
        onChange={handleChange}
        minLength="2"
        maxLength="30"
        placeholder=""
        required />
      <span className="form__input-error">{errors[name]}</span>
    </label>
  )
};
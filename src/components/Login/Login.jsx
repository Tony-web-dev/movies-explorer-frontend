import useFormValidation from "../../utils/useFormValidation.js";
import Form from "../Form/Form.jsx";
import Greeting from "../Greeting/Greeting.jsx";

export default function Login({ onLogin, errorMessages }) {
  const { values, errors, handleChange, isValid } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <main className="main">
      <section className="section auth">
        <Greeting>Рады видеть!</Greeting>
        <Form name="login" onSubmit={handleSubmit} errors={errors} handleChange={handleChange} errorMessages={errorMessages} isValid={isValid} values={values} />
      </section>
    </main>
  )
};
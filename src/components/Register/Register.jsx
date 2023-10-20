import Greeting from "../Greeting/Greeting.jsx";
import Form from "../Form/Form.jsx";
import useFormValidation from "../../utils/useFormValidation.js";

export default function Register({ onRegister, errorMessage }) {
  const { values, errors, handleChange, isValid } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }
  return (
    <main className="main">
      <section className="section auth">
        <Greeting>Добро пожаловать!</Greeting>
        <Form name="register" onSubmit={handleSubmit} errorMessage={errorMessage} errors={errors} handleChange={handleChange} isValid={isValid} values={values} />
      </section>
    </main>
  )
};
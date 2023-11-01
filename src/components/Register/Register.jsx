import Greeting from "../Greeting/Greeting.jsx";
import Form from "../Form/Form.jsx";

export default function Register({ onRegister, errorMessage }) {

  return (
    <main className="main">
      <section className="section auth">
        <Greeting>Добро пожаловать!</Greeting>
        <Form name="register" onSubmit={onRegister} errorMessage={errorMessage} />
      </section>
    </main>
  )
};
import Form from "../Form/Form.jsx";
import Greeting from "../Greeting/Greeting.jsx";

export default function Login({ onLogin, errorMessage }) {

  return (
    <main className="main">
      <section className="section auth">
        <Greeting>Рады видеть!</Greeting>
        <Form name="login" onSubmit={onLogin} errorMessage={errorMessage} />
      </section>
    </main>
  )
};
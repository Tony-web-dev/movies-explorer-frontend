import Form from "../Form/Form";
import Greeting from "../Greeting/Greeting";
import "./Login.css";

export default function Login() {
  return (
    <main className="main">
      <section className="section auth">
        <Greeting>Рады видеть!</Greeting>
        <Form name="login" />
      </section>
    </main>
  )
};